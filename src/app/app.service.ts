import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable({ providedIn: "root" })
export class AppService {

	private isLoggedIn = new BehaviorSubject(false);
	currIsLoggedIn = this.isLoggedIn.asObservable();

	private isSidenavOpen = new BehaviorSubject(true);
	currIsSidenavOpen = this.isSidenavOpen.asObservable();

	constructor() { }

	/**
	 * Observable Subjects
	 */
	setLoggedIn(state: boolean) {
		this.isLoggedIn.next(state);
	}

	setSidenavOpen(state: boolean) {
		this.isSidenavOpen.next(state);
	}

	/**
	 * Service Functions
	 */
	login(email: string, password: string): any {
		return Promise.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
			.catch((error) => Promise.reject(error));
	}

	logout(): any {
		return Promise.resolve(firebase.auth().signOut())
			.catch((error) => Promise.reject(error));
	}

	auth() {
		return new Promise((resolve) => {
			firebase.auth().onAuthStateChanged((isAuthenticated: any) => {
				(isAuthenticated) ? resolve(true) : resolve(false);
			});
		});
	}

	retrieveSettings(): Promise<Settings> {
		return new Promise((resolve, reject) => {
			firebase.firestore()
				.collection("settings")
				.where("owner", "==", firebase.auth().currentUser.email)
				.get()
				.then((doc: any) => {
					if (!doc.empty) { resolve(doc.docs[0].data()); }
					else { resolve({}); }
				}).catch((err) => reject(err));
		});
	}

}

export interface Settings {
	currency?: string,
	due?: number,
	owner?: string,
	statement?: number,
}

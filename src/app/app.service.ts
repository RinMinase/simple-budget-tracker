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
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged((isAuthenticated: any) => {
				(isAuthenticated) ? resolve() : reject(new Error("Not authenticated"));
			});
		});
	}

}

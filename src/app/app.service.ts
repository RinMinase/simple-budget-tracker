import { Injectable } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AppService {

	private isLoggedIn = new BehaviorSubject(false);
	currIsLoggedIn = this.isLoggedIn.asObservable();

	constructor() { }

	setLoggedIn(state: boolean) {
		this.isLoggedIn.next(state);
	}

	login(email: string, password: string) {
		return Promise.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
			.catch((error) => Promise.reject(error));
	}

	logout() {
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

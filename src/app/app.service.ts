import { Injectable } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable({ providedIn: "root" })
export class AppService {

	constructor() { }

	login(email: string, password: string) {
		return Promise.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
			.catch((error) => Promise.reject(error));
	}

}

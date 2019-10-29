import { Component } from "@angular/core";
import { initializeApp } from "firebase/app";

@Component({
	selector: "app-root",
	template: `<app-nav></app-nav><router-outlet></router-outlet>`,
})
export class AppComponent {
	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyAqBGJy6mRnHjhU_YmeebSODruhfYHClj4",
			authDomain: "budget-tracker-50645.firebaseapp.com",
			databaseURL: "https://budget-tracker-50645.firebaseio.com",
			projectId: "budget-tracker-50645",
			storageBucket: "budget-tracker-50645.appspot.com",
			messagingSenderId: "263455231985"
		};

		initializeApp(firebaseConfig);
	}
}

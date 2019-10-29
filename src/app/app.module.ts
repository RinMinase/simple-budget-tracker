import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { NavModule } from "./nav/nav.module";
import { LoginModule } from "./login/login.module";

const routes: Routes = [];

const config = {
	apiKey: "AIzaSyAqBGJy6mRnHjhU_YmeebSODruhfYHClj4",
	authDomain: "budget-tracker-50645.firebaseapp.com",
	databaseURL: "https://budget-tracker-50645.firebaseio.com",
	projectId: "budget-tracker-50645",
	storageBucket: "budget-tracker-50645.appspot.com",
	messagingSenderId: "263455231985"
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		BrowserAnimationsModule,

		AngularFireModule.initializeApp(config),
		AngularFirestoreModule,

		NavModule,
		LoginModule,
	],
	providers: [{
		provide: FirestoreSettingsToken,
		useValue: {},
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }

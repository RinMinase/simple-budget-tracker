import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { initializeApp } from "firebase/app";

import { NavModule } from "./nav/nav.module";
import { LoginModule } from "./login/login.module";
import { HomeModule } from "./home/home.module";
import { AppService } from "@core/app.service";

@Component({
	selector: "app-root",
	template: `<app-nav></app-nav><router-outlet></router-outlet>`,
})
class AppComponent {
	constructor(private service: AppService) {
		const firebaseConfig = {
			apiKey: "AIzaSyAqBGJy6mRnHjhU_YmeebSODruhfYHClj4",
			projectId: "budget-tracker-50645",
		};

		initializeApp(firebaseConfig);

		this.service.auth()
			.then((isAuth: boolean) => (isAuth) ? this.service.setLoggedIn(true) : null);
	}
}

const routes: Routes = [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		BrowserAnimationsModule,

		NavModule,
		LoginModule,
		HomeModule,
	],
	providers: [{
		provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
		useValue: { duration: 2000 },
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }

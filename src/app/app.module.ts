import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavModule } from "./nav/nav.module";
import { LoginModule } from "./login/login.module";

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
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule
} from "@angular/material";

import { LoginComponent } from "./login.component";

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: "login", component: LoginComponent }]),

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
	]
})
export class LoginModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

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
		ReactiveFormsModule,

		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
	]
})
export class LoginModule { }

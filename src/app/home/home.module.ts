import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import {
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: "", component: HomeComponent }]),
		ReactiveFormsModule,

		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
	]
})
export class HomeModule { }

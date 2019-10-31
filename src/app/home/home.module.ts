import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import {
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatTabsModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from "./home.component";
import { CreditTabComponent } from './credit-tab/credit-tab.component';
import { CashTabComponent } from './cash-tab/cash-tab.component';

@NgModule({
	declarations: [
		HomeComponent,
		CreditTabComponent,
		CashTabComponent
	],
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
		MatTabsModule,
	]
})
export class HomeModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import {
	MatButtonModule,
	MatDividerModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatTabsModule,
} from "@angular/material";

import { HomeComponent } from "./home.component";
import { CashDetailsComponent } from "./cash-details/cash-details.component";
import { CashTabComponent } from "./cash-tab/cash-tab.component";
import { CreditDetailsComponent } from "./credit-details/credit-details.component";
import { CreditTabComponent } from "./credit-tab/credit-tab.component";

@NgModule({
	declarations: [
		HomeComponent,
		CashDetailsComponent,
		CashTabComponent,
		CreditDetailsComponent,
		CreditTabComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: "", component: HomeComponent }]),
		ReactiveFormsModule,

		MatButtonModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatTabsModule,
	]
})
export class HomeModule { }

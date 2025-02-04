import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";

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

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { MatButtonModule, MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: "", component: HomeComponent }]),

		MatButtonModule,
		MatListModule,
		MatSidenavModule,
	]
})
export class HomeModule { }

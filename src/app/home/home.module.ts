import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { MatListModule, MatSidenavModule, MatButtonModule } from '@angular/material';

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

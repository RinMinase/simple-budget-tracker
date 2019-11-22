import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavComponent } from "./nav.component";

@NgModule({
	declarations: [NavComponent],
	imports: [
		CommonModule,

		MatButtonModule,
		MatToolbarModule,
	],
	exports: [NavComponent]
})
export class NavModule { }

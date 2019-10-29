import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { NavComponent } from "./nav.component";

@NgModule({
	declarations: [NavComponent],
	imports: [
		CommonModule,

		MatToolbarModule,
		MatButtonModule,
	],
	exports: [NavComponent]
})
export class NavModule { }

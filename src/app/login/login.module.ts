import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule } from "@angular/material";
import { RouterModule } from "@angular/router";

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

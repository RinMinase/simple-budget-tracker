import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

import { MatSnackBar } from "@angular/material";

import { AppService } from "@core/app.service.ts";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

	loading = false;
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private snackbar: MatSnackBar,
		private service: AppService,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: [""],
			password: [""],
		});
	}

	async authenticate() {
		this.loading = true;

		const { email, password } = this.loginForm.value;
		try {
			await this.service.login(email, password);
			this.service.setLoggedIn(true);
			this.router.navigateByUrl("/");
		} catch (error) {
			this.loading = false;

			switch (error.code) {
				case "auth/invalid-email":
				case "auth/user-not-found":
				case "auth/argument-error":
				case "auth/wrong-password":
					this.snackbar.open("Invalid username or password.", "Close", {
						duration: 2000
					});
					break;
				default:
					this.snackbar.open("An unkown error has occurred.", "Close", {
						duration: 2000
					});
			}
		}
	}

}

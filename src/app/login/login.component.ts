import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppService } from "@app/app.service.ts";

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
		private service: AppService,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: [""],
			password: [""],
		});
	}

	authenticate() {
		this.loading = true;

		const { email, password } = this.loginForm.value;
		this.service.login(email, password)
			.then(() => this.router.navigateByUrl("/"))
			.catch(() => {
				this.loading = false;
			});
	}

}

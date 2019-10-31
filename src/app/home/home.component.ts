import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { AppService } from '@app/app.service';

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

	settingsCreditForm: FormGroup;
	isSidenavOpen: boolean = true;
	currActiveList: string = "Credit";
	isSettingsOpen: boolean = true;

	settings = {
		currency: "PHP ",
		credit: {
			due: -1,
			statement: -1
		}
	}


	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private snackbar: MatSnackBar,
		private service: AppService,
	) { }

	ngOnInit() {
		this.settingsCreditForm = this.formBuilder.group({
			currency: ["PHP", [Validators.maxLength(5)]],
			due: [1, [Validators.required, Validators.min(1), Validators.max(30)]],
			statement: [1, [Validators.required, Validators.min(1), Validators.max(30)]]
		});

		this.service.currIsSidenavOpen.subscribe((state) => this.isSidenavOpen = state);

		this.service.auth()
			.then((isAuth) => {
				if (!isAuth) {
					this.router.navigateByUrl("/login")
				}
			});
	}

	saveCreditSettings() {
		if (this.settingsCreditForm.valid) {
			const { currency } = this.settingsCreditForm.value;

			this.settings.currency = (currency) ? `${currency} ` : "";
			this.isSettingsOpen = false;

			this.snackbar.open("Settings saved", "Close", { duration: 2000 });
		}
	}

	setActiveList(list: string) {
		this.currActiveList = list;
		this.isSettingsOpen = false;
	}

}

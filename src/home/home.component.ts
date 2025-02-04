import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { addMonths, format, setDate } from "date-fns"

import { AppService, Settings } from "@core/app.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

	flagDisableRetrieve = true;

	settingsCreditForm: FormGroup;
	isSidenavOpen: boolean = true;
	currActiveList: string = "Credit";
	isSettingsOpen: boolean = false;
	isMobile: boolean = window.innerWidth < 576;

	settings = {
		currency: "PHP ",
		credit: {
			due: null,
			statement: null
		}
	}

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private snackbar: MatSnackBar,
		private service: AppService,
	) { }

	async ngOnInit() {
		this.settingsCreditForm = this.formBuilder.group({
			currency: ["PHP", [Validators.maxLength(5)]],
			due: ["", [Validators.min(1), Validators.max(30)]],
			statement: ["", [Validators.min(1), Validators.max(30)]]
		});

		this.service.currIsSidenavOpen.subscribe((state) => this.isSidenavOpen = state);

		const isAuth = await this.service.auth();
		if (isAuth) {
			if (!this.service.isDev || !this.flagDisableRetrieve) {
				const data: Settings = await this.service.retrieveSettings();

				this.processCurrency(data.currency);
				this.processDue(data.due);
				this.processStatement(data.statement);
				this.settingsCreditForm.setValue({
					currency: data.currency,
					due: data.due,
					statement: data.statement,
				});
			}
		} else {
			this.router.navigateByUrl("/login")
		}
	}

	async logout() {
		await this.service.logout();
		this.service.setLoggedIn(false);
		this.router.navigateByUrl("/login");
	}

	saveCreditSettings() {
		if (this.settingsCreditForm.valid) {
			const { currency, due, statement } = this.settingsCreditForm.value;

			this.processCurrency(currency)
			this.processDue(due);
			this.processStatement(statement);

			this.isSettingsOpen = false;
			this.snackbar.open("Settings saved", "Close");
		}
	}

	setActiveList(list: string) {
		this.currActiveList = list;
		this.isSettingsOpen = false;

		if (this.isMobile) {
			this.service.setSidenavOpen(false);
		}
	}

	private processCurrency(currency: string) {
		this.settings.currency = (currency) ? `${currency} ` : "";
	}

	private processDue(due: number) {
		if (due) {
			const date = setDate(new Date(), due);
			if (date < new Date()) { addMonths(date, 1); }
			this.settings.credit.due = format(date, "EEEE MMM dd, yyyy");
		} else {
			this.settings.credit.due = null;
		}
	}

	private processStatement(statement: number) {
		if (statement) {
			const date = setDate(new Date(), statement);
			if (date < new Date()) { addMonths(date, 1); }
			this.settings.credit.statement = format(date, "EEEE MMM dd, yyyy");
		} else {
			this.settings.credit.statement = null;
		}
	}

}

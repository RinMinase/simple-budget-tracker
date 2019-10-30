import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppService } from "@app/app.service";

@Component({
	selector: "app-nav",
	styles: [
		".spacer { flex: 1 1 auto }",
		".ml { margin-left: .75rem }",
	],
	template: `
		<mat-toolbar color="primary">
			<i class="material-icons">menu</i>
			<span (click)="navigateHome()" class="ml">Simple Budget Tracker</span>
			<span class="spacer"></span>
			<button mat-button (click)="navigateUser()">
				<span *ngIf="!isLoggedIn">Login</span>
				<span *ngIf="isLoggedIn">Logout</span>
				<i class="material-icons ml">account_circle</i>
			</button>
		</mat-toolbar>`
})
export class NavComponent implements OnInit {

	isLoggedIn: boolean = false;

	constructor(
		private router: Router,
		private service: AppService,
	) { }

	ngOnInit() {
		this.service.currIsLoggedIn.subscribe((state) => this.isLoggedIn = state);
	}

	navigateHome() {
		this.router.navigateByUrl("/")
	}

	navigateUser() {
		if (this.isLoggedIn) {
			this.service.logout().then(() => {
				this.service.setLoggedIn(false);
				this.router.navigateByUrl("/login")
			});
		} else {
			this.router.navigateByUrl("/login")
		}
	}

}

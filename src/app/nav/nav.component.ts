import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: "app-nav",
	styles: [
		".spacer { flex: 1 1 auto }"
	],
	template: `
		<mat-toolbar color="primary">
			<span (click)="navigateHome()">Simple Budget Tracker</span>
			<span class="spacer"></span>
			<button mat-button (click)="navigateLogin()">Login</button>
		</mat-toolbar>`
})
export class NavComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	navigateHome() {
		this.router.navigateByUrl("/")
	}

	navigateLogin() {
		this.router.navigateByUrl("/login")
	}

}

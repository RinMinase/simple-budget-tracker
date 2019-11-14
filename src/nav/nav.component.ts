import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppService } from "@core/app.service";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
})
export class NavComponent implements OnInit {

	isLoggedIn: boolean = false;
	isSidenavOpen: boolean = true;

	constructor(
		private router: Router,
		private service: AppService,
	) { }

	ngOnInit() {
		this.service.currIsLoggedIn.subscribe((state) => this.isLoggedIn = state);
		this.service.currIsSidenavOpen.subscribe((state) => this.isSidenavOpen = state);
	}

	navigateHome() {
		this.router.navigateByUrl("/")
	}

	// async navigateUser() {
	// 	if (this.isLoggedIn) {
	// 		await this.service.logout();
	// 		this.service.setLoggedIn(false);
	// 		this.router.navigateByUrl("/login")
	// 	} else {
	// 		this.router.navigateByUrl("/login")
	// 	}
	// }

	toggleSidenav() {
		this.service.setSidenavOpen(!this.isSidenavOpen);
	}

}

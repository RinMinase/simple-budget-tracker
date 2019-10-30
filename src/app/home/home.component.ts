import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { AppService } from '@app/app.service';

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

	isSidenavOpen: boolean = true;

	constructor(
		private router: Router,
		private service: AppService,
	) { }

	ngOnInit() {
		this.service.currIsSidenavOpen.subscribe((state) => this.isSidenavOpen = state);

		this.service.auth()
			.then(() => {
			}).catch(() => this.router.navigateByUrl("/login"));
	}

}

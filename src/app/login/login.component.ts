import { Component, OnInit } from "@angular/core";

import { AppService } from "@app/app.service.ts";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

	constructor(private service: AppService) { }

	ngOnInit() {
	}

}

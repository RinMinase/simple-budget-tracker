import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-cash-details",
	templateUrl: "./cash-details.component.html",
})
export class CashDetailsComponent implements OnInit {

	@Input() currency: string;

	constructor() { }

	ngOnInit() {
	}

}

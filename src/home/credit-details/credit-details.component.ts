import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-credit-details",
	templateUrl: "./credit-details.component.html",
})
export class CreditDetailsComponent implements OnInit {

	@Input() currency: string;
	@Input() due: string;
	@Input() statement: string;

	constructor() { }

	ngOnInit() {
	}

}

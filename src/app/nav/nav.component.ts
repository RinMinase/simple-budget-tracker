import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-nav",
	template: `
		<mat-toolbar [style.background]="'skyblue'">
			<span>Simple Budget Tracker</span>
		</mat-toolbar>`
})
export class NavComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

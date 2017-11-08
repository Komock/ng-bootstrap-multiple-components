import { Component, OnInit } from '@angular/core';

import { CommonService } from './common.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	static selector = 'app-root';
	public title = 'app works!';
	public constructor(
		private _commonService: CommonService
	) {}
	public ngOnInit(): void {
		setTimeout(() => {
			this._commonService.stream$$.next({some: 'val'});
		}, 5000);
	}
}

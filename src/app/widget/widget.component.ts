import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';


@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
	static selector = 'app-widget';
	public some: any;

	public constructor(
		private _commonService: CommonService
		) { }

	public ngOnInit() {
		this._commonService.stream$$
			.subscribe((data: any) => {
				console.log('Data: ', data);
				this.some = data.some;
			});
	}

}

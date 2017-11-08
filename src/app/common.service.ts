import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
	public stream$$: Subject<any> = new Subject();
	public constructor() { }

}

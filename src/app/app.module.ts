import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonService } from './common.service';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';

import { searchRootComponents } from './search-root-components';

const entryComponents: any[] = [AppComponent, WidgetComponent];
const componentsToBootstrap: any[] = searchRootComponents(entryComponents);

@NgModule({
	declarations: [
		AppComponent,
		WidgetComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	entryComponents: entryComponents,
	providers: [CommonService],
	bootstrap: componentsToBootstrap
})
export class AppModule { }

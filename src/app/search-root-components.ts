export function filter(component: any) {
	return document.querySelector(component.selector);
}
export function searchRootComponents(components: any[]): any[] {
	return components.filter(filter);
}

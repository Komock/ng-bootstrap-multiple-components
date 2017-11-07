import { NgBootstrapMultipleComponentsPage } from './app.po';

describe('ng-bootstrap-multiple-components App', () => {
  let page: NgBootstrapMultipleComponentsPage;

  beforeEach(() => {
    page = new NgBootstrapMultipleComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

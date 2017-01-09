import { NBProjPage } from './app.po';

describe('nbproj App', function() {
  let page: NBProjPage;

  beforeEach(() => {
    page = new NBProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

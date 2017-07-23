import { GhUserSearchPage } from './app.po';

describe('gh-user-search App', () => {
  let page: GhUserSearchPage;

  beforeEach(() => {
    page = new GhUserSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

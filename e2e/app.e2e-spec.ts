import { FireappPage } from './app.po';

describe('fireapp App', function() {
  let page: FireappPage;

  beforeEach(() => {
    page = new FireappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

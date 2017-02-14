import { PuskalWebsitePage } from './app.po';

describe('puskal-website App', function() {
  let page: PuskalWebsitePage;

  beforeEach(() => {
    page = new PuskalWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

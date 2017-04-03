import { MyUberProjectPage } from './app.po';

describe('my-uber-project App', () => {
  let page: MyUberProjectPage;

  beforeEach(() => {
    page = new MyUberProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

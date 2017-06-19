import { Ng2studyPage } from './app.po';

describe('ng2study App', () => {
  let page: Ng2studyPage;

  beforeEach(() => {
    page = new Ng2studyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

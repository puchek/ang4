import { MyAng4Page } from './app.po';

describe('my-ang4 App', () => {
  let page: MyAng4Page;

  beforeEach(() => {
    page = new MyAng4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

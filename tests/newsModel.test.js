const NewsModel = require('../src/newsModel');

describe('getArticleInfo', () => {
  
  beforeEach(() => {
    model = new NewsModel();
  });
  
  it('initially it returns no articles - an empty array', () => {
    // const model = new NewsModel();
    expect(model.getArticleInfo()).toEqual([]);
  });
})
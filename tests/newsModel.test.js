const NewsModel = require('../src/models/newsModel');

describe('getArticleInfo', () => {
  it('returns no article info', () => {
    const model = new NewsModel();
    expect(model.getArticleInfo()).toEqual(null);
  })
})


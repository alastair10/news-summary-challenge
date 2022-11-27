/**
 * @jest-environment jsdom
 */
// need to 'npm install jest-environment-jsdom'

const fs = require('fs');
const NewsView = require('../src/newsView');
const NewsModel = require('../src/newsModel');
const NewsClient = require('../src/newsClient');
/*
Makes fetch available to our test (it is not by default). Normally fetch is only available within the browser.
Will need to run: npm install --save- jest-fetch-mock
*/
require('jest-fetch-mock').enableMocks();


describe('NotesView', () => {
  
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html'); // sets the jest 'document' HTML to a mock html webpage for the tests
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
  });
  
  it('fetches the mock a passes through the news data', (done) => {
    fetch.mockResponseOnce(JSON.stringify(['some news data']))
    client.getNewsInfo('news', (newsData) => {
      expect(newsData).toEqual(['some news data']);
      done();
    });
  });
});
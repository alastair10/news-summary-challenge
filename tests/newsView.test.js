/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('../src/views/newsView');
const NewsModel = require('./newsModel');

/*
Makes fetch available to our test (it is not by default). Normally fetch is only available withing the browser.
Will need to run: npm install --save- jest-fetch-mock
*/
require('jest-fetch-mock').enableMocks();

describe('NotesView', () {
  

  // beforeEach hook sets the jest 'document' HTML to a mock html webpage for the tests
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })
  

  it('calls getNewsInfo from client class, gets response, and sets the info on the model', () => {
    const model = new NewsModel();
    // create the mock
    const clientMock = {
      getNewsInfo: (callback) => {
        callback('this is a test article title');
      }
    };

    const view = new NewsView(model, clientMock);
    view.displayArticlesFromApi();

    expect(document.querySelector('div.note').textContent).toBe('this is a test article title');
  });
});
const NewsClient = require('../newsClient');

/*
Makes fetch available to our test (it is not by default). Normally fetch is only available withing the browser.
Will need to run: npm install --save- jest-fetch-mock
*/
require('jest-fetch-mock').enableMocks();

describe('NewsClient class', () => {
  it('calls fetch and loads the news data', () => {
    // Instantiate the class
    const client = new NewsClient();

    // Mock the response from fetch.
    // Make the mock look similar to the real response (should have same fields)
    fetch.mockResponseOnce(JSON.stringify({
      webTitle:'At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull',
      type: 'article',
      sectionId: 'sport',
      sectionName:'Sport'
    }));

    // Call the method with the callback function
    // callback is called when a response is received
    client.getNewsInfo('At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull', (newsInfo) => {
      expect(newsInfo.webTitle).toBe('At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull');
    })
  })
})

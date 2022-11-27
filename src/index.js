const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const apiKey = require('../apiKey');

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);



// const { get } = require('callback-fetch');

// const apiKey = require('../apiKey');
// const apiURL = `https://content.guardianapis.com/search?api-key=${apiKey}`;

// let newsData = null;

// get(apiURL).then((response) => {
//   newsData = JSON.parse(response.body);
//   console.log(newsData);
// });

// console.log('Requesting news data');
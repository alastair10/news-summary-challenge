const NewsClient = require('../newsClient');




const { get } = require('callback-fetch');

const apiKey = require('../apiKey');
const apiURL = `https://content.guardianapis.com/search?api-key=${apiKey}`;

let newsData = null;

get(apiURL).then((response) => {
  newsData = JSON.parse(response.body);
  console.log(newsData);
});

console.log('Requesting news data');
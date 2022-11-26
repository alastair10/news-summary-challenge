class NewsClient {
  getNewsInfo (apiKey, callback) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`)
    .then(response => response.json())
    .then(data => callback(data))
  };
}

module.exports = NewsClient;
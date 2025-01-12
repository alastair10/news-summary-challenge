class NewsView {
  constructor(model, client) {
    this.model = model;  // inject model class
    this.client = client;  // inject client class
    
    this.mainContainerEl = document.querySelector('#main-container');  // define main container el

    // User input and button setup
    const submitButtonEl = document.querySelector('#submit-button');
    const subjectInputEl = document.querySelector('#subject-input');

    submitButtonEl.addEventListener('click', () => {
      const searchTerm = subjectInputEl.value;

      this.client.getNewsInfo(searchTerm, (news) => {
        this.model.setArticleInfo(news);
        this.displayArticles();
      });
    });
  };

  // QUESTION: Why set it via the model first? Can go straight into display...?
  displayArticles() {
    // Clears the previous results
    this.clearArticles();

    // gets all the article info
    const articles = this.model.getArticleInfo();
    console.log(articles);
    //console.log(articles.response);
    //console.log(articles.response.results);
    // need webTitle, webUrl

    
    // For each article
    // - create two new elements
    // - assign title and picture to elements
    // = append the new elements to end of the container
    
    articles.forEach(article => {

      // Set the image
      const imageEl = document.createElement('img');
      imageEl.src = article.fields.thumbnail;
      imageEl.className = 'image';
      this.mainContainerEl.append(imageEl);
      this.mainContainerEl.append(document.createElement('br'));

      // Set the headline (w/url)
      const titleEl = document.createElement('a');
      titleEl.textContent = article.fields.headline;
      titleEl.href = article.webUrl;
      titleEl.className = 'title';
      this.mainContainerEl.append(titleEl);

      // Create a space
      const spacer = document.createElement('p');
      spacer.className = 'spacer'
      this.mainContainerEl.append(spacer);
    });
  }

  clearArticles() {
    document.querySelectorAll('img').forEach(image => image.remove());
    document.querySelectorAll('a').forEach(title => title.remove());
    document.querySelectorAll('spacer').forEach(space => space.remove());
    document.querySelectorAll('br').forEach(lineBreak => lineBreak.remove());
  }
};

module.exports = NewsView;
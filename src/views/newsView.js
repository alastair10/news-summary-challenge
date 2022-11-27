class NewsView {
  constructor(model, client) {
    // inject model class
    this.model = model;
    // inject client class
    this.client = client;
    // define main container element
    this.mainContainerEl = document.querySelector('#main-container');
  };

  displayArticlesFromApi() {
    this.client.getNewsInfo((articles) => {
      this.model.setArticleInfo(articles);
      this.displayArticles();
    });
  };

  displayArticles() {
    // gets all the article info
    const articles = this.model.getArticleInfo();

    // For each article
    // - create two new elements
    // - assign title and picture to elements
    // = append the new elements to end of the container

    articles.forEach(article => {
      const imageEl = document.createElement('img');
      imageEl.src = articles['thumbnail'];

      const titleEl = document.querySelector('#article-headline');
      titleEl.textContent = articles.headline

      this.mainContainerEl.append(imageEl);
      this.mainContainerEl.append(titleEl);
    });
  }
};

module.exports = NewsView;
class NewsView {
  constructor(model, client) {
    this.model = model;  // inject model class
    this.client = client;  // inject client class
    
    this.mainContainerEl = document.querySelector('#main-container');  // define main container el

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
      // const imageEl = document.createElement('img');
      // imageEl.src = articles['thumbnail'];
      // this.mainContainerEl.append(imageEl);

      const titleEl = document.createElement('a');
      titleEl.textContent = article.fields.headline;
      titleEl.href = article.webUrl;
      this.mainContainerEl.append(titleEl);
      console.log(titleEl.textContent);
    });
  }
};

module.exports = NewsView;
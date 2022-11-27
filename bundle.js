(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "59b8dfb6-b5f2-45e3-85f9-347ed746f434";
    }
  });

  // src/newsClient.js
  var require_newsClient = __commonJS({
    "src/newsClient.js"(exports, module) {
      var apiKey2 = require_apiKey();
      var NewsClient2 = class {
        constructor() {
          this.apiKey = apiKey2;
        }
        getNewsInfo(searchTerm, callback) {
          fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey2}`).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NewsClient2;
    }
  });

  // src/newsModel.js
  var require_newsModel = __commonJS({
    "src/newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.articleInfo = [];
        }
        setArticleInfo(articleInfo) {
          this.articleInfo = articleInfo.response.results;
        }
        getArticleInfo() {
          return this.articleInfo;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // src/newsView.js
  var require_newsView = __commonJS({
    "src/newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          const submitButtonEl = document.querySelector("#submit-button");
          const subjectInputEl = document.querySelector("#subject-input");
          submitButtonEl.addEventListener("click", () => {
            const searchTerm = subjectInputEl.value;
            this.client.getNewsInfo(searchTerm, (news) => {
              this.model.setArticleInfo(news);
              this.displayArticles();
            });
          });
        }
        displayArticles() {
          this.clearArticles();
          const articles = this.model.getArticleInfo();
          console.log(articles);
          articles.forEach((article) => {
            const spacer = document.createElement("br");
            this.mainContainerEl.append(spacer);
            const imageEl = document.createElement("img");
            imageEl.src = article.fields.thumbnail;
            imageEl.className = "image";
            this.mainContainerEl.append(imageEl);
            this.mainContainerEl.append(spacer);
            const titleEl = document.createElement("a");
            titleEl.textContent = article.fields.headline;
            titleEl.href = article.webUrl;
            titleEl.className = "title";
            this.mainContainerEl.append(titleEl);
            console.log(titleEl.textContent);
          });
        }
        clearArticles() {
          document.querySelectorAll("br").forEach((image) => image.remove());
          document.querySelectorAll("img").forEach((image) => image.remove());
          document.querySelectorAll("a").forEach((title) => title.remove());
        }
      };
      module.exports = NewsView2;
    }
  });

  // src/index.js
  var NewsClient = require_newsClient();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var apiKey = require_apiKey();
  var client = new NewsClient();
  var model = new NewsModel();
  var view = new NewsView(model, client);
})();

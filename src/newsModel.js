class NewsModel {
  
  constructor() {
    this.articleInfo = [];
  }

  setArticleInfo(articleInfo) {
    this.articleInfo = articleInfo.response.results;
  }

  getArticleInfo() {
    return this.articleInfo;
  }

}

module.exports = NewsModel;
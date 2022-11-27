class NewsModel {
  constructor() {
    this.articleInfo = null;
  }

  setArticleInfo(articleInfo) {
    this.articleInfo = articleInfo;
  }

  getArticleInfo() {
    return this.articleInfo;
  }

}

module.exports = NewsModel;
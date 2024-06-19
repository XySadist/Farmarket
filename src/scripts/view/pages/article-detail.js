/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';
import UrlParser from '../../routes/url-parser';

const ArticleDetail = {
  async render() {
    return `      
          <div class="detail-article container" id="article-detail-page">
          </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleDetail = await RemoteData.getDetailArticle(url.id);

    const articleDetailPage = document.querySelector('#article-detail-page');
    articleDetailPage.innerHTML += TemplateCreator.createDetailArticleTemplate(articleDetail);

    const articleList = await RemoteData.getArticles();

    const articleListComponent = document.querySelector('#article-list-component');
    articleList.forEach((vegetable) => {
      articleListComponent.innerHTML += TemplateCreator.createArticleItem(vegetable);
    });
  },
};

export default ArticleDetail;

/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';

const Articles = {
  async render() {
    return `      
            <h2 tabindex=0 class="page-title">Artikel untuk anda</h2>
            <div class="custom-divider"></div>
            <div id="article-list-page">
                <div class="article-list" id="article-list-component">
                  
                </div>
            </div>
        `;
  },

  async afterRender() {
    const articleList = await RemoteData.getArticles();

    console.log(`article ${articleList}`);

    const articleListComponent = document.querySelector('#article-list-component');
    articleList.forEach((vegetable) => {
      // eslint-disable-next-line max-len
      articleListComponent.innerHTML += TemplateCreator.createArticleItem(vegetable);
    });
  },
};

export default Articles;

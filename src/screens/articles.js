/* eslint-disable max-len */
import RemoteData from '../data/remote-data';
// import Utils from '../utils/utils';
import TemplateCreator from '../scripts/view/tempalates/template-creator';

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
    // const vegetableListPage = document.querySelector('#vegetable-list-page');
    // vegetableListPage.innerHTML += createLoadingIndicatorTemplate();

    const articleList = await RemoteData.getArticles();

    console.log(`article ${articleList}`);

    // const loadingIndicator = vegetableListPage.querySelector('#loading-indicator-component');
    // Utils.hideElement(loadingIndicator);

    // const vegetableListComponent = document.querySelector('#vegetable-list-component');
    // vegetableList.forEach((vegetable) => {
    //     // eslint-disable-next-line max-len
    //     vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    // });
  },
};

export default Articles;

/* eslint-disable max-len */
import RemoteData from '../data/remote-data';
import UrlParser from '../scripts/routes/url-parser';
import TemplateCreator from '../scripts/view/tempalates/template-creator';

const ProductDetail = {
  async render() {
    return `
        <div class="vegetable-detail-page" id="vegetable-detail-page">
            
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const vegetableDetail = await RemoteData.getDetailVegetable(url.id);

    const vegetableDetailPage = document.querySelector('#vegetable-detail-page');
    vegetableDetailPage.innerHTML += TemplateCreator.createVegetableDetailTemplate(vegetableDetail);

    const vegetableBenefitListComponent = document.querySelector('#vegetable-benefit-list-component');
    vegetableDetail.benefits.forEach((benefit) => {
      vegetableBenefitListComponent.innerHTML += TemplateCreator.createVegetableBenefitItem(benefit);
    });

    const vegetableList = await RemoteData.getVegetables();

    const vegetableListComponent = document.querySelector('#vegetable-list-component');
    vegetableList.forEach((vegetable) => {
      vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    });
  },
};

export default ProductDetail;

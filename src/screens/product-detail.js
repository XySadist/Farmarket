import RemoteData from '../data/remote-data.js';
import UrlParser from '../scripts/routes/url-parser.js';
import TemplateCreator from '../scripts/views/template-creator.js';

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

        const vegetableList = await RemoteData.getVegetables();

        const vegetableListComponent = document.querySelector('#vegetable-list-component');
        vegetableList.forEach((vegetable) => {
            vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
        });
    },
};

export default ProductDetail;

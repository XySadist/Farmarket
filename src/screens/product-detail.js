import RemoteData from '../data/remote-data.js';
// import Utils from '../utils/utils';
import UrlParser from '../scripts/routes/url-parser.js';
import TemplateCreator from '../scripts/views/template-creator.js';

const ProductDetail = {
    async render() {
        return `
        <div class="vegetable-detail-page" id="vegetable-detail-page">
            
        </div>

        <!--
        <h3>Other Vegetables</h3>
        <div class="vegetable-list">
            <div class="vegetable-card-item">
            <img src="images/broccoli.jpg" alt="Broccoli">
            <h3>Broccoli</h3>
            <p>Unit: 1kg</p>
            <p>Price: $3.00</p>
            <button class="add-to-cart">Add to Cart <span class="plus-icon">+</span></button>
            </div>
            <div class="vegetable-card-item">
            <img src="images/spinach.jpg" alt="Spinach">
            <h3>Spinach</h3>
            <p>Unit: 200g</p>
            <p>Price: $2.00</p>
            <button class="add-to-cart">Add to Cart <span class="plus-icon">+</span></button>
            </div>
            
        </div>
        -->
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const vegetableDetail = await RemoteData.getDetailVegetable(url.id);

        const vegetableDetailPage = document.querySelector('#vegetable-detail-page');
        vegetableDetailPage.innerHTML += TemplateCreator.createVegetableDetailTemplate(vegetableDetail);

        // const vegetableListPage = document.querySelector('#vegetable-list-page');
        // vegetableListPage.innerHTML += createLoadingIndicatorTemplate();

        // const vegetableList = await RemoteData.getDetailVegetable();

        // const loadingIndicator = vegetableListPage.querySelector('#loading-indicator-component');
        // Utils.hideElement(loadingIndicator);

        // const vegetableListComponent = document.querySelector('#vegetable-list-component');
        // vegetableList.forEach((vegetable) => {
        //     vegetableListComponent.innerHTML += createVegetableItemTemplate(vegetable);
        // });
    },
};

export default ProductDetail;

/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import UrlParser from '../../routes/url-parser';
import TemplateCreator from '../tempalates/template-creator';

const Cart = {
  async render() {
    return `
       <div class="cart-container">
            <h2 tabindex=0 class="page-title">Keranjang belanja anda</h2>
            <div class="custom-divider"></div>
            <div class="cart-item">
                <img src="image.jpg" alt="Vegetable Image" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">Vegetable Name</h3>
                    <h3 class="cart-item-price">Rp10000</h3>
                    <p class="cart-item-unit">100g</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn subtract">-</button>
                    <input type="number" value="1" class="quantity-input">
                    <button class="quantity-btn add">+</button>
                </div>
                <button class="delete-btn">Delete</button>
            </div>
            <!-- Add more cart items as needed -->
        </div>
        `;
  },

  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const vegetableDetail = await RemoteData.getDetailVegetable(url.id);

    // const vegetableDetailPage = document.querySelector('#vegetable-detail-page');
    // vegetableDetailPage.innerHTML += TemplateCreator.createVegetableDetailTemplate(vegetableDetail);

    // const vegetableBenefitListComponent = document.querySelector('#vegetable-benefit-list-component');
    // vegetableDetail.benefits.forEach((benefit) => {
    //   vegetableBenefitListComponent.innerHTML += TemplateCreator.createVegetableBenefitItem(benefit);
    // });

    // const vegetableList = await RemoteData.getVegetables();

    // const vegetableListComponent = document.querySelector('#vegetable-list-component');
    // vegetableList.forEach((vegetable) => {
    //   vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    // });
  },
};

export default Cart;

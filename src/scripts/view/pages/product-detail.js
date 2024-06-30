/* eslint-disable no-alert */
/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import UrlParser from '../../routes/url-parser';
import TemplateCreator from '../tempalates/template-creator';
import VegetableCartIdb from '../../../data/cart-data';

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

    const addToCartButtonVegetableDetail = document.querySelector('#add-to-cart-vegetable-detail');
    addToCartButtonVegetableDetail.addEventListener('click', (event) => {
      const id = vegetableDetail.id;
      const name = vegetableDetail.name;
      const unit = `${vegetableDetail.unit_total}${vegetableDetail.unit}`;
      const price = vegetableDetail.price;
      const quantity = parseInt(document.querySelector('#quantity').value, 10);
      const imageUrl = document.querySelector('.vegetable-image-container').closest('.vegetable-image-container').querySelector('img').getAttribute('src');

      const parsedUrl = new URL(imageUrl);
      const image = parsedUrl.pathname.substring(1);

      const vegetable = {
        id, name, unit, price, image, quantity,
      };

      VegetableCartIdb.addVegetableToCart(vegetable);
      alert(`${name} ditambahkan ke keranjang!`);
    });

    const vegetableList = await RemoteData.getVegetables();

    const vegetableListComponent = document.querySelector('#vegetable-list-component');
    vegetableList.forEach((vegetable) => {
      vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    });

    vegetableListComponent.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
        const button = event.target;
        const id = button.dataset.id;
        const name = button.closest('.vegetable-card-item').querySelector('.vegetable-title').textContent;
        const unit = button.closest('.vegetable-card-item').querySelector('.vegetable-unit').textContent;
        const price = parseInt(button.closest('.vegetable-card-item').querySelector('.vegetable-price').textContent.replace(/\D/g, ''), 10);
        const imageUrl = button.closest('.vegetable-card-item').querySelector('img').getAttribute('src');

        const parsedUrl = new URL(imageUrl);
        const image = parsedUrl.pathname.substring(1);

        const vegetable = {
          id, name, unit, price, image, quantity: 1,
        };

        VegetableCartIdb.addVegetableToCart(vegetable);
        alert(`${name} ditambahkan ke keranjang!`);
      }
    });
  },
};

export default ProductDetail;

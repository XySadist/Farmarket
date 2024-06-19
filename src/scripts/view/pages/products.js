import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';
import VegetableCartIdb from '../../../data/cart-data';

const Products = {
  async render() {
    return `      
            <h2 tabindex=0 class="page-title">Sayuran untuk Anda</h2>
            <div class="custom-divider"></div>
            <div id="vegetable-list-page">
                <div class="vegetable-list" id="vegetable-list-component">
                </div>
            </div>
        `;
  },

  async afterRender() {
    const vegetableList = await RemoteData.getVegetables();

    const vegetableListComponent = document.querySelector('#vegetable-list-component');
    vegetableList.forEach((vegetable) => {
      // eslint-disable-next-line max-len
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
        // eslint-disable-next-line no-alert
        alert(`${name} ditambahkan ke keranjang!`);
      }
    });
  },
};

export default Products;

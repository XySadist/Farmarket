/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import UrlParser from '../../routes/url-parser';
import TemplateCreator from '../tempalates/template-creator';
import VegetableCartIdb from '../../../data/cart-data';

const Cart = {
  async render() {
    return `
       <div class="cart-container">
            <h2 tabindex=0 class="page-title">Keranjang belanja anda</h2>
            <div class="custom-divider"></div>
            <div id="vegetable-cart-list">
            </div>
            <div id="vegetable-order-overview">
            </div>
            <!-- Add more cart items as needed -->
        </div>
        `;
  },

  async afterRender() {
    const vegetableCartList = await VegetableCartIdb.getVegetableCartItems();

    const vegetableCartListComponent = document.querySelector('#vegetable-cart-list');
    const vegetableOrderOverview = document.querySelector('#vegetable-order-overview');

    vegetableCartListComponent.innerHTML = '';
    vegetableOrderOverview.innerHTML = '';

    if (vegetableCartList.length > 0) {
      const totalItems = vegetableCartList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = vegetableCartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      vegetableOrderOverview.innerHTML = TemplateCreator.createOrderOverviewTemplate(totalItems, totalPrice);
    }

    vegetableCartList.forEach((vegetable) => {
      vegetableCartListComponent.innerHTML += TemplateCreator.createVegetableCartItem(vegetable);
    });

    vegetableCartListComponent.addEventListener('click', async (event) => {
      if (event.target.classList.contains('quantity-btn')) {
        const input = event.target.parentElement.querySelector('.quantity-input').value;
        if (event.target.classList.contains('subtract')) {
          const quantity = parseInt(input, 10);

          if (quantity === 1) return;

          await VegetableCartIdb.updateQuantity(event.target.dataset.id, quantity, 'substract');
        }

        if (event.target.classList.contains('add')) {
          const quantity = parseInt(input, 10);

          await VegetableCartIdb.updateQuantity(event.target.dataset.id, quantity, 'add');
        }

        this.afterRender();
      }

      if (event.target.classList.contains('delete-btn')) {
        VegetableCartIdb.deleteVegetableCartItem(event.target.dataset.id);

        this.afterRender();
      }
    });

    const orderButton = document.querySelector('#order-button');
    orderButton.addEventListener('click', async (event) => {
      const order = {
        items: vegetableCartList.map((item) => ({
          vegetableId: item.id,
          quantity: item.quantity,
        })),
      };

      const transactionId = await RemoteData.postOrder(order);
      await VegetableCartIdb.clearAllData();

      this.afterRender();
      const baseUrl = document.location.origin;

      const url = `${baseUrl}/#/transactions/${transactionId}`;

      window.location.href = url;
    });
  },
};

export default Cart;

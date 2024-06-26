/* eslint-disable no-alert */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';
import VegetableCartIdb from '../../../data/cart-data';

const VegetableRecommendation = {
  async render() {
    return `
            <h2 tabindex=0 class="page-title">Cari rekomendasi sayur</h2>
            <div class="custom-divider"></div>
            <div class="recommendation-page">
                <div class="search-container">
                    <div class="autocomplete-container">
                        <label for="benefits"><h2>Masukkan manfaat sayur:</h2></label>
                        <input type="text" id="benefits" name="benefits" placeholder="Mulai ketik manfaat...">
                        <div id="benefits-list" class="autocomplete-items"></div>
                    </div>
                    <button id="search-button">Cari sayur!</button>
                </div>
            </div>
            <div class="vegetable-list" id="vegetable-list-component">
            </div>
        `;
  },

  async afterRender() {
    const benefitsInput = document.querySelector('#benefits');
    const benefitsList = document.querySelector('#benefits-list');
    const searchButton = document.querySelector('#search-button');
    const vegetableListComponent = document.querySelector('#vegetable-list-component');

    let benefitsData = [];
    const selectedBenefits = [];

    function clearAutocomplete() {
      benefitsList.innerHTML = '';
    }

    function showAutocomplete(benefits) {
      clearAutocomplete();
      benefits.forEach((benefit) => {
        const item = document.createElement('div');
        item.innerText = benefit.benefit;
        item.addEventListener('click', () => {
          if (selectedBenefits.find((b) => b.id === benefit.id)) {
            alert('Manfaat sudah terpilih');
          } else if (selectedBenefits.length >= 3) {
            alert('Anda hanya bisa memilih maksimal 3 manfaat');
          } else {
            selectedBenefits.push({ id: benefit.id, name: benefit.benefit });
            benefitsInput.value = selectedBenefits.map((b) => b.name).join(', ');
            clearAutocomplete();
          }
        });
        benefitsList.appendChild(item);
      });
    }

    benefitsInput.addEventListener('input', async () => {
      const query = benefitsInput.value.toLowerCase().split(',').pop().trim();
      if (query.length >= 3) {
        if (benefitsData.length === 0) {
          benefitsData = await RemoteData.getBenefit();
        }
        const filteredBenefits = benefitsData.filter(
          (benefit) => benefit.benefit.toLowerCase().includes(query),
        );
        showAutocomplete(filteredBenefits);
      } else {
        clearAutocomplete();
      }
    });

    searchButton.addEventListener('click', async () => {
      benefitsData = [];
      vegetableListComponent.innerHTML = '';
      const benefitIds = selectedBenefits.map((benefit) => benefit.id);
      console.log(`selectedBenefits ${benefitIds}`);
      const vegetableList = await RemoteData.getVegetablesByBenefits(benefitIds);
      vegetableList.forEach((vegetable) => {
        // eslint-disable-next-line max-len
        vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
      });
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
    return '';
  },
};

export default VegetableRecommendation;

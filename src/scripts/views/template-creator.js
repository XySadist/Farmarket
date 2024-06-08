/* eslint-disable max-len */
import CONFIG from '../globals/config.js';

const TemplateCreator = {
    createVegetableItemTemplate(vegetable) {
        return `<div class="vegetable-card-item">
                    <img src="${CONFIG.BASE_URL}${vegetable.image_url}">
                    <div class="vegetable-card-item-information">
                        <h3 class="vegetable-title"><a href="/#/products/${vegetable.id}">${vegetable.name}</a></h3>
                        <p class="vegetable-unit">${vegetable.unit_total}${vegetable.unit}</p>
                        <h3 class="vegetable-price">Rp${vegetable.price}</h3>
                        <button class="add-to-cart">Keranjang <i class="plus-icon fa-sharp fa-solid fa-plus"></i></button>
                    </div>
                </div>
    `;
    },

    createVegetableDetailTemplate(vegetable) {
        return `<div class="vegetable-detail-container">
                    <div class="vegetable-image-container">
                        <img src="${CONFIG.BASE_URL}${vegetable.image_url}" alt="Vegetable Image">
                    </div>
                    <div class="vegetable-info-container">
                        <h2>${vegetable.name}</h2>
                        <p class="price">${vegetable.price}</p>
                        <p class="unit">per ${vegetable.unit_total}${vegetable.unit}</p>
                        <p class="description">${vegetable.description}</p>
                    </div>
                    <div class="vegetable-action-container">
                        <div class="quantity-container">
                            <label for="quantity">Jumlah:</label>
                            <input type="number" id="quantity" name="quantity" min="1" value="1">
                        </div>
                        <button class="add-to-cart">
                            Keranjang 
                            <i class="plus-icon fa-sharp fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
          `;
    },
};

export default TemplateCreator;

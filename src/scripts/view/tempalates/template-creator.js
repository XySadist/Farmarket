/* eslint-disable max-len */
import CONFIG from '../../globals/config';

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
    const vegetableDetailPage = `
                <h2>Detail Sayuran</h2>
                <div class="vegetable-detail-container">
                    <div class="vegetable-image-container">
                        <img src="${CONFIG.BASE_URL}${vegetable.image_url}" alt="Vegetable Image">
                    </div>
                    <div class="vegetable-card-item-information">
                        <h3 class="vegetable-title">${vegetable.name}</h3>
                        <h3 class="vegetable-price">Rp${vegetable.price}</h3>
                        <p class="vegetable-unit">per ${vegetable.unit_total}${vegetable.unit}</p>
                        <h2 class="title-description">Deskripsi</h2>
                        <p class="description">${vegetable.description}</p>
                        <h2 class="title-description">Manfaat</h2>
                        <div id="vegetable-benefit-list-component">
                        </div>
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
                <h2>Sayuran Lainnya</h2>
                <div class="vegetable-list" id="vegetable-list-component">
                </div>
          `;
    return vegetableDetailPage;
  },

  createVegetableBenefitItem(benefit) {
    return `<p>- ${benefit.name}</p>`;
  },

  createArticleItem(article) {
    const date = new Date(article.created_at);

    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Format the date string as "18 May 2024"
    const formattedDate = `${day} ${month} ${year}`;
    return `<div class="article-card">
                  <img src="${CONFIG.BASE_URL}${article.image_url}" alt="${article.title} Article Image">
                  <div class="article-content">
                      <h3>${article.title}</h3>
                      <p class="description">${article.description}</p>
                      <div class="article-footer">
                        <p class="date">${formattedDate}</p>
                        <button class="read-more"><a href="/#/articles/${article.id}">Read More</a></button>
                    </div>
                  </div>
              </div>`;
  },

  createDetailArticleTemplate(article) {
    const date = new Date(article.created_at);

    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Format the date string as "18 May 2024"
    const formattedDate = `${day} ${month} ${year}`;

    return `<h1 class="detail-article-title">${article.title}</h1>
              <div class="detail-article-image-card">
                  <img src="${CONFIG.BASE_URL}${article.image_url}" alt="${article.title} Image" class="detail-article-image">
              </div>
              <div class="detail-article-content-card">
                  <p class="detail-article-date">${formattedDate}</p>
                  <p class="detail-article-description">${article.description}</p>
              </div>
              <h2>Artikel Lainnya</h2>
              <div id="detail-article-list-page">
                  <div class="article-list" id="article-list-component">
                  </div>
              </div>
              `;
  },
};

export default TemplateCreator;

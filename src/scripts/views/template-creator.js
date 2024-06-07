/* eslint-disable max-len */
import CONFIG from '../globals/config.js';

const createVegetableItemTemplate = (vegetable) => `
      <div class="vegetable-card-item">
          <img src="${CONFIG.BASE_URL}${vegetable.image_url}">
          <div class="vegetable-card-item-information">
              <h3 class="vegetable-title">${vegetable.name}</h3>
              <p class="vegetable-unit">${vegetable.unit_total}${vegetable.unit}</p>
              <h3 class="vegetable-price">Rp${vegetable.price}</h3>
              <button class="add-to-cart">Keranjang <i class="plus-icon fa-sharp fa-solid fa-plus"></i></button>
          </div>
      </div>
    `;

// const createRestaurantDetailTemplate = (restaurant) => {
//   let foodMenusComponent = '';
//   restaurant.menus.foods.forEach((food) => { foodMenusComponent += `<li>${food.name}</li>`; });

//   let drinkMenusComponent = '';
//   restaurant.menus.drinks.forEach((food) => { drinkMenusComponent += `<li>${food.name}</li>`; });

//   let customerReviewsComponent = '';
//   restaurant.customerReviews.forEach((customerReview) => {
//     customerReviewsComponent += `
//         <div class="review">
//             <p><strong>${customerReview.name}</strong></p><p>${customerReview.review}</p><p>${customerReview.date}</p>
//         </div>`;
//   });

//   const detailRestaurant = `
//     <div class="restaurant-detail">
//             <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
//             <div class="restaurant-detail-info">
//                 <h1 class="restaurant-detail-name"> ${restaurant.name}</h1>
//                 <p class="restaurant-detail-address"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}, ${restaurant.city}</p>
//                 <p class="restaurant-detail-address"><i class="fas fa-star"></i> ${restaurant.rating}</p>
//                 <p class="restaurant-detail-description">${restaurant.description}</p>
//             </div>

//             <div class="menu-container">
//                 <div class="menu food-menu">
//                     <h2>Food Menus</h2>
//                     <ul class="menu-list food" id="restaurant-food-menus">
//                         ${foodMenusComponent}
//                     </ul>
//                 </div>
//                 <div class="menu drink-menu">
//                     <h2>Drink Menus</h2>
//                     <ul class="menu-list drink" id="restaurant-drink-menus">
//                         ${drinkMenusComponent}
//                     </ul>
//                 </div>
//             </div>

//             <div class="restaurant-detail-review">
//                 <h2>Customer Reviews</h2>
//                 <div class="reviews">
//                     ${customerReviewsComponent}
//                 </div>
//             </div>
//         </div>
//     `;

//   return detailRestaurant;
// };

// const createLikeButtonTemplate = () => `
//   <button aria-label="like this restaurant" id="likeButton" class="like">
//   <i class="far fa-heart"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this restaurant" id="likeButton" class="like">
//     <i class="fas fa-heart"></i>
//   </button>
// `;

// const createLoadingIndicatorTemplate = () => `
//     <div class="container-loading" id="loading-indicator-component">
//         <h2 class="title-information">Loading..</h2>
//     </div>
// `;

// export {
  // createVegetableItemTemplate,
  // createRestaurantDetailTemplate,
  // createLikeButtonTemplate,
  // createLikedButtonTemplate,
  // createLoadingIndicatorTemplate,
// };

export default createVegetableItemTemplate;

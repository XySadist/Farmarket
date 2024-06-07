import Products from '../../screens/products.js';
import ProductDetail from '../../screens/product-detail.js';
import Home from '../../screens/home.js';
import VegetableRecommendation from '../../screens/vegetable-recommendation.js';

const routes = {
  '/': Home,
  '/products': Products,
  '/products/:id': ProductDetail,
  '/recommendation': VegetableRecommendation,
};

export default routes;

import Products from '../view/pages/products';
import ProductDetail from '../view/pages/product-detail';
import Home from '../view/pages/home';
import VegetableRecommendation from '../view/pages/vegetable-recommendation';

const routes = {
  '/': Home,
  '/products': Products,
  '/products/:id': ProductDetail,
  '/recommendation': VegetableRecommendation,
  '/articles': Articles,
};

export default routes;

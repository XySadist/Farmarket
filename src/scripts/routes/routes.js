import Products from '../../screens/products';
import ProductDetail from '../../screens/product-detail';
import Home from '../../screens/home';
import VegetableRecommendation from '../../screens/vegetable-recommendation';
import Articles from '../../screens/articles';

const routes = {
  '/': Home,
  '/products': Products,
  '/products/:id': ProductDetail,
  '/recommendation': VegetableRecommendation,
  '/articles': Articles,
};

export default routes;

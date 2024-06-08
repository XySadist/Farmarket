import Products from '../../screens/products.js';
import ProductDetail from '../../screens/product-detail.js';
import Home from '../../screens/home.js';

const routes = {
  '/': Home,
  '/products': Products,
  '/products/:id': ProductDetail,
};

export default routes;

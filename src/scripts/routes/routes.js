import Products from '../view/pages/products';
import ProductDetail from '../view/pages/product-detail';
import Home from '../view/pages/home';
import VegetableRecommendation from '../view/pages/vegetable-recommendation';
import Articles from '../view/pages/articles';
import ArticleDetail from '../view/pages/article-detail';
import Cart from '../view/pages/cart';
import TransactionDetail from '../view/pages/transaction-detail';

const routes = {
  '/': Home,
  '/products': Products,
  '/products/:id': ProductDetail,
  '/recommendation': VegetableRecommendation,
  '/articles': Articles,
  '/articles/:id': ArticleDetail,
  '/cart': Cart,
  '/transactions/:id': TransactionDetail,
};

export default routes;

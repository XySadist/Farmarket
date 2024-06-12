import CONFIG from './config';

const API_ENDPOINT = {
  VEGETABLES: `${CONFIG.BASE_URL}vegetables`,
  VEGETABLES_BY_BENEFITS: `${CONFIG.BASE_URL}vegetables/recommendation`,
  DETAIL_VEGETABLE: (id) => `${CONFIG.BASE_URL}vegetables/${id}`,
  BENEFITS: `${CONFIG.BASE_URL}benefits`,
  ARTICLES: `${CONFIG.BASE_URL}articles`,
};

export default API_ENDPOINT;

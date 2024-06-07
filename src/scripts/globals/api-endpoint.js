import CONFIG from './config.js';

const API_ENDPOINT = {
  VEGETABLES: `${CONFIG.BASE_URL}vegetables`,
  DETAIL_VEGETABLE: (id) => `${CONFIG.BASE_URL}vegetables/${id}`,
};

export default API_ENDPOINT;

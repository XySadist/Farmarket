import API_ENDPOINT from '../scripts/globals/api-endpoint';

const RemoteData = {
  async getVegetables() {
    const response = await fetch(API_ENDPOINT.VEGETABLES);
    const responseJson = await response.json();

    if (responseJson.error) {
      throw Error('Failed to fetch vegetables');
    }

    const { data: vegetables } = responseJson;

    if (vegetables.length > 0) {
      return vegetables;
    }

    throw Error("There's no vegetable at the moment :(");
  },
  async getDetailVegetable(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_VEGETABLE(id));
    const responseJson = await response.json();

    if (responseJson.error) {
      throw Error('Failed to fetch vegetable detail');
    }

    const { data: vegetableDetail } = responseJson;

    return vegetableDetail;
  },

  async getBenefit() {
    const response = await fetch(API_ENDPOINT.BENEFITS);
    const responseJson = await response.json();

    if (responseJson.error) {
      throw Error('Failed to fetch benefits');
    }

    const { data: benefits } = responseJson;

    if (benefits.length > 0) {
      return benefits;
    }

    throw Error("There's no benefits at the moment :(");
  },
  async getVegetablesByBenefits(benefitIds) {
    const response = await fetch(API_ENDPOINT.VEGETABLES_BY_BENEFITS, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ benefitIds }),
    });
    const responseJson = await response.json();

    if (responseJson.error) {
      throw Error('Failed to fetch vegetables');
    }

    const { data: vegetables } = responseJson;

    return vegetables;
  },

  async getArticles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();

    if (responseJson.error) {
      throw Error('Failed to fetch articles');
    }

    const { data: articles } = responseJson;

    if (articles.length > 0) {
      return articles;
    }

    throw Error("There's no articles at the moment :(");
  },
};

export default RemoteData;

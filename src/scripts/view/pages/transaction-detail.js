/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';
import UrlParser from '../../routes/url-parser';

const TransactionDetail = {
  async render() {
    return `      
        <div class="transaction-detail-page" id="transaction-detail-page">
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const transactionDetail = await RemoteData.getTransactionDetail(url.id);

    const transactionDetailPage = document.querySelector('#transaction-detail-page');
    transactionDetailPage.innerHTML += TemplateCreator.createTransactionOverViewTemplate(transactionDetail);

    const transactionItems = document.querySelector('#transaction-items');
    transactionDetail.items.forEach((item) => {
      transactionItems.innerHTML += TemplateCreator.createTransactionOverviewItemTemplate(item);
    });
  },
};

export default TransactionDetail;

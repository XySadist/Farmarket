/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';

const Home = {
  async render() {
    return `
    <div class="container">
        <div class="row subtext d-lg-flex justify-content-lg-between align-items-center">
          <div class="col-lg-5 col-md-12 subtext-text animate__animated animate__fadeInLeft">
            <h1 class="subtext-text-display">Sayuran <span class="text">Berkualitas </span>untuk<span class="text"> Kesehatan</span> Anda dan</h1>
            <p class="subtext-text-desc">Kami menyediakan sayuran segar dan organik langsung dari petani lokal untuk memastikan Anda mendapatkan yang terbaik bagi kesehatan Anda."</p>
            <div class="anchor-header d-flex">
              <a href="#/recommendation" class="button">Telusuri Produk Kami</a>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 subtext-image">
            <img src="./public/images/chantal-garnier-910GanwBoew-unsplash.jpg" alt="" class="image animate__animated animate__fadeInRight" />
          </div>
        </div>
      </div>
      <!-- card -->
      <h2 tabindex="0" class="title">Sayuran untuk anda</h2>
      <div class="custom-divider"></div>
      <div id="vegetable-list-page">
        <div class="vegetable-list" id="vegetable-list-component"></div>
      </div>
      <!-- about -->
      <section class="section-about" id="about">
        <div class="container">
          <div class="subtext d-flex align-items-center justify-content-between flex-column flex-lg-row">
            <div class="col-12 col-lg-6 col-xl-5 subtext-image">
              <img src="./public/images/petani.jpg" alt="" class="image-about animate__animated animate__fadeInLeft rounded-4" />
            </div>
            <div class="col-12 col-lg-6 col-xl-7 subtext-text">
              <h2 class="subtext-text-display" data-aos="fade-right">Tentang Kami</h2>
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Apa Itu Farmarket?</b> <br />
                Farmarket hadir sebagai solusi inovatif untuk menciptakan ruang hijau, memaksimalkan penggunaan lahan sempit di hunian Anda. Sehingga hunian Anda tidak hanya menjadi nyaman melainkan menjadi dan ramah terhadap
              </p>
              <br />
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Bagaimana Bertanam di Farmarket?</b> <br />
                Kami menyediakan fitur survei berupa form, dimana nanti anda dapat mengisi survei tersebut sesuai dengan kondisi hunian dan keinginan. Nantinya berdasarkan data yang anda kirimkan maka kami akan memberikan rekomendasi jenis
                bertanam apa yang cocok dan juga tanaman apa saja yagn cocok dengan jenis bertanam tersebut
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- about end -->
      <!--Artikle -->
      <div id="articleCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#articleCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#articleCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#articleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#articleCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#articleCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- end Artikle -->`;
  },

  async afterRender() {
    const vegetableList = await RemoteData.getVegetables();
    const articleList = await RemoteData.getArticles();

    // const loadingIndicator = vegetableListPage.querySelector('#loading-indicator-component');
    // Utils.hideElement(loadingIndicator);

    const vegetableListComponent = document.querySelector('#vegetable-list-component');
    vegetableList.forEach((vegetable) => {
      // eslint-disable-next-line max-len
      vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    });
    const articleListComponent = document.querySelector('.carousel-inner');
    let index = 0;
    articleList.forEach((vegetable) => {
      // eslint-disable-next-line max-len
      const active = index === 0;
      articleListComponent.innerHTML += TemplateCreator.createArticleCarouselItemTemplate(vegetable, active);
      index += 1;
    });
  },
};

export default Home;

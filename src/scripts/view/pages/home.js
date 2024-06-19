/* eslint-disable max-len */
import RemoteData from '../../../data/remote-data';
import TemplateCreator from '../tempalates/template-creator';
import imageHero from '../../../../public/images/hero.jpg';
import imagePetani from '../../../../public/images/petani.jpg';

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
          <div class="col-lg-5 col-md-12 subtext-image d-none d-lg-block">
            <img src="${imageHero}" alt="" class="image animate__animated animate__fadeInRight" />
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
              <img src="${imagePetani}" alt="" class="img rounded-4" />
            </div>
            <div class="col-12 col-lg-6 col-xl-7 subtext-text">
              <h2 class="subtext-text-display" data-aos="fade-right">Tentang Kami</h2>
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Apa Itu Farmarket??</b> <br />
                Kami menghubungkan petani lokal dengan konsumen yang mencari sayuran segar dan berkualitas. Melalui platform ini, konsumen dapat dengan mudah membeli berbagai jenis sayuran yang ditanam dan dipanen langsung oleh petani
                setempat, memastikan kesegaran dan kualitas produk.
              </p>
              <br />
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Bagimana cara belanja di Farmarket?</b> <br />
                kami menyediakan fitur berupa sebuah form, dimana user bisa mengisi pilihan manfaat sayur, dimana data hasil form tersebut kami akan memberikan rekomendasi sayuran yang cocok sesuai kebutuhan anda
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

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
              <a href="#" class="button">Telusuri Produk Kami</a>
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
      <!--
      <div id="vegetable-list-page">
        <div class="vegetable-list" id="vegetable-list-component"></div>
      </div>
      -->
      <!--
      <div class="vegetable-slider">
        <div class="vegetable-card-item">
          <img src="./public/images/wortel.png" class="wortel-img" />
          <div class="vegetable-card-item-information">
            <h3 class="vegetable-title"><a href="/#/products/123">Wortel</a></h3>
            <p class="vegetable-unit">500 gram</p>
            <h3 class="vegetable-price">Rp50,000</h3>
            <button class="add-to-cart">
              Keranjang <a href="#" class="ikon"><i data-feather="shopping-cart"></i></a>
            </button>
          </div>
        </div>

        <div class="vegetable-card-item">
          <img src="./public/images/tomato.png" class="tomato-img" />
          <div class="vegetable-card-item-information">
            <h3 class="vegetable-title"><a href="/#/products/456">Tomat</a></h3>
            <p class="vegetable-unit">200 gram</p>
            <h3 class="vegetable-price">Rp30,000</h3>
            <button class="add-to-cart">
              Keranjang <a href="#" class="ikon"><i data-feather="shopping-cart"></i></a>
            </button>
          </div>
        </div>
        <div class="vegetable-card-item">
          <img src="./public/images/brokoli.png" class="brokoli-img" />
          <div class="vegetable-card-item-information">
            <h3 class="vegetable-title"><a href="/#/products/456">Brokoli</a></h3>
            <p class="vegetable-unit">200 gram</p>
            <h3 class="vegetable-price">Rp30,000</h3>
            <button class="add-to-cart">
              Keranjang <a href="#" class="ikon"><i data-feather="shopping-cart"></i></a>
            </button>
          </div>
        </div>
        <div class="vegetable-card-item">
          <img src="./public/images/terong.jpg" class="terong-img" />
          <div class="vegetable-card-item-information">
            <h3 class="vegetable-title"><a href="/#/products/456">Terong Ungu</a></h3>
            <p class="vegetable-unit">100 gram</p>
            <h3 class="vegetable-price">Rp30,000</h3>
            <button class="add-to-cart">
              Keranjang <a href="#" class="ikon"><i data-feather="shopping-cart"></i></a>
            </button>
          </div>
        </div>
       
      </div>
      -->
      <!-- about -->
      <section class="section-about" id="about">
        <div class="container">
          <div class="subtext d-flex align-items-center justify-content-between flex-column flex-lg-row">
            <div class="col-12 col-lg-6 col-xl-5 subtext-image">
              <img src="./public/images/petani.jpg" alt="" class="img rounded-4" />
            </div>
            <div class="col-12 col-lg-6 col-xl-7 subtext-text">
              <h2 class="subtext-text-display" data-aos="fade-right">Tentang Kami</h2>
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Apa Itu Green Haven?</b> <br />
                Green Haven hadir sebagai solusi inovatif untuk menciptakan ruang hijau, memaksimalkan penggunaan lahan sempit di hunian Anda. Sehingga hunian Anda tidak hanya menjadi nyaman melainkan menjadi dan ramah terhadap
              </p>
              <br />
              <p class="subtext-text-desc" data-aos="fade-right">
                <b>Bagaimana Bertanam di Green Haven?</b> <br />
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
          <div class="carousel-item active">
            <div class="article-item">
              <h3 class="article-title">Judul Artikel 1</h3>
              <p class="article-content">Konten artikel pertama. Ini adalah contoh teks untuk artikel pertama dalam carousel.</p>
              <a href="#" class="read-more">Baca Selengkapnya</a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="article-item">
              <h3 class="article-title">Judul Artikel 2</h3>
              <p class="article-content">Konten artikel kedua. Ini adalah contoh teks untuk artikel kedua dalam carousel.</p>
              <a href="#" class="read-more">Baca Selengkapnya</a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="article-item">
              <h3 class="article-title">Judul Artikel 3</h3>
              <p class="article-content">Konten artikel ketiga. Ini adalah contoh teks untuk artikel ketiga dalam carousel.</p>
              <a href="#" class="read-more">Baca Selengkapnya</a>
            </div>
          </div>
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

    // const loadingIndicator = vegetableListPage.querySelector('#loading-indicator-component');
    // Utils.hideElement(loadingIndicator);

    const vegetableListComponent = document.querySelector('#vegetable-list-component');
    vegetableList.forEach((vegetable) => {
      // eslint-disable-next-line max-len
      vegetableListComponent.innerHTML += TemplateCreator.createVegetableItemTemplate(vegetable);
    });
  },
};

export default Home;

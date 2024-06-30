class AppBarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <header>
      <nav class="navbar">
        <a href="#" class="navbar-logo">Farm<span>arket.</span></a>
        <div class="navbar-nav">
          <a href="#">Home</a>
          <a href="#/products">Produk</a>
          <a href="#Artikel">Artikel</a>
          <a href="#About">Tentang kami</a>
        </div>
        <div class="navbar-extra">
          <a href="#"><i data-feather="user"></i></a>
          <a href="#"><i data-feather="search"></i></a>
          <a href="#" id="hambuger-menu"><i data-feather="menu"></i></a>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define('app-bar-component', AppBarComponent);

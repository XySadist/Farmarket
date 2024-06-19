const DrawerInitiator = {
  init({ button, drawer, content }) {
    // Inisialisasi offcanvas dengan Bootstrap
    const offcanvas = new bootstrap.Offcanvas(drawer);

    // Gunakan event listener untuk button
    button.addEventListener('click', () => {
      this._toggleDrawer(offcanvas, content); // Mengirimkan content sebagai argumen
    });

    // Menambahkan event listener untuk menutup offcanvas saat tombol close diklik
    const closeButton = drawer.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
      this._closeDrawer(offcanvas);
    });
  },

  _toggleDrawer(offcanvas, content) {
    offcanvas.toggle(); // Menggunakan method toggle dari offcanvas

    // Contoh manipulasi konten utama saat offcanvas dibuka
    if (offcanvas._isShown) {
      content.classList.add('offcanvas-open'); // Tambahkan kelas untuk penanganan CSS
    } else {
      content.classList.remove('offcanvas-open');
    }
  },

  _closeDrawer(offcanvas) {
    offcanvas.hide(); // Menggunakan method hide dari offcanvas
  },
};

export default DrawerInitiator;

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '../style/style.css';
import '../style/responsive.css';
import 'animate.css';
import 'regenerator-runtime'; // Jika diperlukan untuk async/await
import App from './view/app';

window.bootstrap = bootstrap;

// Mendefinisikan elemen-elemen yang dibutuhkan oleh App
const app = new App({
  button: document.querySelector('.navbar-toggler'), // Sesuaikan dengan elemen button yang mengaktifkan offcanvas
  drawer: document.querySelector('#offcanvasNavbar'),
  content: document.querySelector('#mainContent'),
});

// Event listener untuk hashchange dan load untuk merender halaman yang sesuai
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

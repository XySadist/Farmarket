import 'regenerator-runtime'; /* for async await transpile */

import '../style/style.css';
import '../components/app-bar-component.js';
// import '../component/jumbotron-component';
// import '../component/footer-component';

import App from './app.js';
import swRegister from '../utils/sw-register.js';

const app = new App({
  content: document.querySelector('#main-content'),
  drawer: document.querySelector('#navigation-drawer-links'),
  button: document.querySelector('#hambuger-menu'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

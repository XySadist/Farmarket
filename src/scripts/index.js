import 'regenerator-runtime'; /* for async await transpile */

import '../style/style.css';
// import '../component/jumbotron-component';
// import '../component/footer-component';

import App from './app.js';

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
});

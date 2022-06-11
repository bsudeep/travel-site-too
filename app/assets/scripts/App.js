import '../styles/styles.css';

import MobileMenu from './modules/MobileMenu';

let theMobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
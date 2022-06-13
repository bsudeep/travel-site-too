import '../styles/styles.css';

import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

let theMobileMenu = new MobileMenu();
let theStickyHeader = new StickyHeader();
new Modal();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if (module.hot) {
  module.hot.accept();
}
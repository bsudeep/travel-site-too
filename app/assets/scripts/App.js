import '../styles/styles.css';

import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';

new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

let theModal;
document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    if (typeof theModal == 'undefined') {
      import(/* webpackChunkName: 'modal'*/ './modules/Modal').then(Modal => {
        theModal = new Modal.default();
        setTimeout(() => {
          theModal.openTheModal();
        }, 20);
      }).catch(() => console.log('There was a problem.'));
    } else {
      theModal.openTheModal();
    }
  })
})

if (module.hot) {
  module.hot.accept();
}
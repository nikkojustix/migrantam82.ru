import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';

import IMask from 'imask';
import fslightbox from 'fslightbox';

flsFunctions.isWebp();
// flsFunctions.mainOffset();

const burgerBtn = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu');
burgerBtn.addEventListener('click', (e) => {
  burgerBtn.classList.toggle('menu-trigger--is-open');
  menu.classList.toggle('menu--is-open');
  document.body.classList.toggle('locked');

  menu.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target == menu || e.target.classList.contains('menu__link')) {
      burgerBtn.classList.remove('menu-trigger--is-open');
      menu.classList.remove('menu--is-open');
      document.body.classList.remove('locked');
    }
  });
});

const elements = document.querySelectorAll('.form__input--tel');
const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};
elements.forEach((element) => {
  const mask = IMask(element, maskOptions);
});

const fileInputs = document.querySelectorAll('.form__file-input');
fileInputs.forEach((input) => {
  input.addEventListener('change', function (e) {
    let fileName = this.value.split('\\').pop();
    this.nextElementSibling.innerHTML = fileName;
  });
});

$('.custom-file-input').on('change', function () {
  var fileName = $(this).val().split('\\').pop();
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
});

// document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.opacity = '0';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

if (document.querySelector('.tabs') != null) {
  flsFunctions.tabs('tabs__btn', 'tabs__item', 'active');
}

flsFunctions.accordion();

// flsFunctions.bindModal('.open-modal-callback', '.modal--callback', '.modal__close');

// flsFunctions.bindModal('.open-modal-order', '.modal--order', '.modal__close');

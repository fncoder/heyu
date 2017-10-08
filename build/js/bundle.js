'use strict';

(function () {
  var hamburger = document.querySelector('.hamburger');

  var fixedHeader = function fixedHeader() {
    var headerTop = document.querySelector('.header-top');
    if (undefined.scrollY > 1) {
      headerTop.classList.add('header-top--fixed');
    } else {
      headerTop.classList.remove('header-top--fixed');
    }
  };

  window.addEventListener('scroll', fixedHeader);

  var hamburgerMenu = function hamburgerMenu() {
    var menu = document.querySelector('.menu-list');
    menu.classList.toggle('toggle-menu');
  };

  hamburger.addEventListener('click', hamburgerMenu);

  $(document).ready(function () {
    $('.menu-list__item-link').click(function (e) {
      e.preventDefault();
      if (this.hash === '#about') {
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 130
        }, 1000);
      } else if (this.hash === '#faq') {
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 90
        }, 1000);
      } else if (this.hash === '#support') {
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 89
        }, 1000);
      } else if (this.hash === '#blog') {
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 90
        }, 1000);
      }
    });
  });
})();
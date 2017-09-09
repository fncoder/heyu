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
})();
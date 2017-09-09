(() => {
  const hamburger = document.querySelector('.hamburger')

  const fixedHeader = () => {
    const headerTop = document.querySelector('.header-top')
    if (this.scrollY > 1) {
      headerTop.classList.add('header-top--fixed')
    } else {
      headerTop.classList.remove('header-top--fixed')
    }
  }

  window.addEventListener('scroll', fixedHeader)

  const hamburgerMenu = () => {
    const menu = document.querySelector('.menu-list')
    menu.classList.toggle('toggle-menu')
  }

  hamburger.addEventListener('click', hamburgerMenu)
})()

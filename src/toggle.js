const navbarMenu = document.querySelector('.header__menu');
const navbarToggleBtn = document.querySelector('.header__nav__toggle');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
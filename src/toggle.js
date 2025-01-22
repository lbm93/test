const toggleBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
})

const menuTrigger = document.querySelector('.header__toggle');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');
});
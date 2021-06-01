const nav = document.querySelector('.navigation');
const navOpen = document.querySelector('.navigation__open');
const navClose = document.querySelector('.navigation__close');

nav.classList.remove('navigation--nojs');

navOpen.addEventListener('click', () => {
  nav.classList.remove('navigation--close')
  nav.classList.add('navigation--open')
});

navClose.addEventListener('click', () => {
  nav.classList.add('navigation--close')
  nav.classList.remove('navigation--open')
});

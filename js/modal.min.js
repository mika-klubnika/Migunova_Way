const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalButton = Array.from(document.querySelectorAll('.modal-button'));


modalButton.forEach(button => {
  button.addEventListener('click', evt => {
    evt.preventDefault();
    modal.classList.add('modal--show');
  })
});

modalClose.addEventListener('click', evt => {
  evt.preventDefault();
  modal.classList.remove('modal--show');
});

window.addEventListener('keydown', evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.toggle('modal--show');
    }
  }
});

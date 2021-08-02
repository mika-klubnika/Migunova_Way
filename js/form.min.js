const forms = document.querySelectorAll('.form');
const success = document.querySelector('.success')
const successClose = document.querySelector('.success__close')


forms.forEach(form => form.addEventListener('submit', evt => {
  evt.preventDefault();
  modal.classList.add('hidden');
  success.classList.add('success--show');
}));

successClose.addEventListener('click', evt => {
  evt.preventDefault();
  success.classList.remove('success--show');
});

window.addEventListener('keydown', evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (success.classList.contains('success--show')) {
      success.classList.toggle('success--show');
    }
  }
});

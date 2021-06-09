const forms = document.querySelectorAll('.form');
const main = document.querySelector('main');

const showMessage = name => {
  modal.classList.add('hidden');
  const node = document.querySelector(`#${name}`).content.cloneNode(true)
  main.appendChild(node)
};

[...forms].forEach(form => form.addEventListener('submit', evt => {
  evt.preventDefault();
  showMessage('success')
}));

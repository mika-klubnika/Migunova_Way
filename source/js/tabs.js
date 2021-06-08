const tabs = document.querySelectorAll('.place-descriptions__navigation-link');
const items = document.querySelectorAll('.place-descriptions__item');

const tabClick = (evt) => {
  const tabId = evt.target.dataset.id;

    [...tabs].forEach((tab, i) => {
      tab.classList.remove('place-descriptions__navigation-link--active');
      items[i].classList.remove('place-descriptions__item--active');
    })

    tabs[tabId - 1].classList.add('place-descriptions__navigation-link--active');
    items[tabId - 1].classList.add('place-descriptions__item--active');
}

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

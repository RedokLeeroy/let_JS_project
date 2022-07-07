import { handleSuccess } from './generateCardList';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
let currentPage = 1;

export default function removeFilmsFromLibrary(data) {
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');

  const dataPage = document.querySelector('[data-page]');
  console.log(dataPage.dataset.page);

  const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));

  let cardIdWatch = [];
  let newArray = getCardWatched.filter(el => el.id !== data.id);

  getCardWatched.map(el => {
    cardIdWatch.push(el.id);
  });

  if (!cardIdWatch.find(el => el === data.id)) {
    return;
  }

  if (data.isWatched) {
    btnAddWatch.textContent = 'Remove';
  }
  if (data.isQueued) {
    btnAddQueie.textContent = 'Remove';
  }

  btnAddWatch.addEventListener('click', () => {
    const localObj = {
      page: currentPage,
      results: newArray,
      total_pages: 0,
      inLocalStorage: false,
      isWatched: false,
    };

    if (dataPage.dataset.page === 'library') {
      handleSuccess(localObj);
    }

    btnAddWatch.textContent = 'Removed!';
    btnAddWatch.disabled = true;

    // if (cardIdWatch.find(el => el === data.id)) {
    // }

    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(newArray));
  });

  btnAddQueie.addEventListener('click', () => {
    const localObj = {
      page: currentPage,
      results: newArray,
      total_pages: 0,
      inLocalStorage: false,
      isQueued: false,
    };

    if (dataPage.dataset.page === 'library') {
      handleSuccess(localObj);
    }

    btnAddQueie.textContent = 'Removed!';
    btnAddQueie.disabled = true;

    // if (cardIdWatch.find(el => el === data.id)) {
    // }

    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(newArray));
  });
}

import { handleSuccess } from './generateCardList';
// import { watchCards } from './library';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
let currentPage = 1;

export function removeFromWatch(data) {
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');
  const dataPage = document.querySelector('[data-page]');
  const libraryPlaceholder = document.querySelector('.placeholder');
  const modalFilmCard = document.querySelector('.modal-film');
  const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
  const doc = document.querySelector('html');

  if (data.isWatched) {
    btnAddWatch.textContent = 'Remove';
  }

  btnAddWatch.addEventListener('click', () => {
    let cardIdWatch = [];
    let newWatchedArray = getCardWatched.filter(el => el.id !== data.id);

    getCardWatched.map(el => {
      cardIdWatch.push(el.id);
    });

    if (!cardIdWatch.find(el => el === data.id)) {
      return;
    }
    if (!newWatchedArray.length && dataPage.dataset.page === 'library') {
      libraryPlaceholder.style.display = 'block';
    }

    const localObj = {
      page: currentPage,
      results: newWatchedArray,
      total_pages: 0,
      inLocalStorage: false,
      isWatched: false,
    };

    if (dataPage.dataset.page === 'library') {
      handleSuccess(localObj);
    }

    btnAddWatch.textContent = 'Removed!';
    btnAddWatch.disabled = true;

    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(newWatchedArray));
  });
}

export function removeFromQueue(data) {
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');
  const doc = document.querySelector('html');

  const dataPage = document.querySelector('[data-page]');
  const libraryPlaceholder = document.querySelector('.placeholder');
  const modalFilmCard = document.querySelector('.modal-film');

  const getCardQueued = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

  if (data.isQueued) {
    btnAddQueie.textContent = 'Remove';
  }

  btnAddQueie.addEventListener('click', () => {
    let cardIdQueue = [];
    let newQueuedArray = getCardQueued.filter(el => el.id !== data.id);

    getCardQueued.map(el => {
      cardIdQueue.push(el.id);
    });

    if (!cardIdQueue.find(el => el === data.id)) {
      return;
    }

    if (!newQueuedArray.length && dataPage.dataset.page === 'library') {
      libraryPlaceholder.style.display = 'block';
    }

    const localObj = {
      page: currentPage,
      results: newQueuedArray,
      total_pages: 0,
      inLocalStorage: false,
      isQueued: false,
    };

    if (dataPage.dataset.page === 'library') {
      handleSuccess(localObj);
    }

    btnAddQueie.textContent = 'Removed!';
    btnAddQueie.disabled = true;

    localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(newQueuedArray));
  });
}

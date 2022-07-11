import { handleSuccess } from './generateCardList';
import { renderModalFilm } from '../templates/renderModalFilm';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
const gallery = document.querySelector('.gallery');
const watchedBtn = document.getElementById('watched-button');
const queueBtn = document.getElementById('queue-button');
const libraryPlaceholder = document.querySelector('.placeholder');

let currentPage = 1;

const localObj = {
  page: currentPage,
  results: [],
  total_pages: 0,
  inLocalStorage: true,
  isWatched: false,
  isQueued: false,
};

watchCards();

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards() {
  const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
  localObj.results = [];
  togglePlaceholder(watchedCards);
  queueBtn.classList.remove('active__queued');
  watchedBtn.classList.add('active__watched');

  if (watchedCards.length !== 0) {
    localObj.results = [];
    watchedCards.forEach(element => {
      localObj.results.push(element);
    });
    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
  } else {
    gallery.innerHTML = '';
  }
}

function queueCards() {
  const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
  localObj.results = [];
  togglePlaceholder(queuedCards);
  watchedBtn.classList.remove('active__watched');
  queueBtn.classList.add('active__queued');

  if (queuedCards.length !== 0) {
    localObj.results = [];
    queuedCards.forEach(element => {
      localObj.results.push(element);
    });

    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
  } else {
    gallery.innerHTML = '';
  }
}

function togglePlaceholder(collection) {
  if (collection.length) {
    libraryPlaceholder.style.display = 'none';
  } else {
    libraryPlaceholder.style.display = 'block';
  }
}

import { handleSuccess } from './generateCardList';
import { renderModalFilm } from '../templates/renderModalFilm';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
const gallery = document.querySelector('.gallery');
const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
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
if (watchedCards.length !== 0) {
  libraryPlaceholder.style.display = 'none';
}

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards() {
  togglePlaceholder(watchedCards);
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');

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
  togglePlaceholder(queuedCards);
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');

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

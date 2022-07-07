import { createCard } from './createCard';
import { handleSuccess } from './generateCardList';
import { renderModalFilm } from '../templates/renderModalFilm';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
const gallery = document.querySelector('.gallery');
const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
const watchedBtn = document.getElementById('watched-button');
const queueBtn = document.getElementById('queue-button');
const main = document.querySelector('main');
const libraryPlaceholder = document.querySelector('.placeholder');

let currentPage = 1;

const localObj = {
  page: currentPage,
  results: [],
  total_pages: 0,
  inLocalStorage: true,
};

if (watchedCards.length !== 0) {
  watchedCards.forEach(element => {
    localObj.results.push(element);
  });

  const arr = handleSuccess(localObj);
  renderModalFilm(arr);
}
if (queuedCards.length !== 0) {
  queuedCards.forEach(element => {
    localObj.results.push(element);
  });

  const arr = handleSuccess(localObj);
  renderModalFilm(arr);
}

gallery.innerHTML = createCard(watchedCards);
if (watchedCards.length) {
  libraryPlaceholder.style.display = 'none';
  gallery.innerHTML = createCard(watchedCards);
}

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards(evt) {
  evt.preventDefault();
  togglePlaceholder(watchedCards);
  gallery.innerHTML = createCard(watchedCards);
}

function queueCards(evt) {
  evt.preventDefault();
  togglePlaceholder(queuedCards);
  gallery.innerHTML = createCard(queuedCards);
}

function togglePlaceholder(collection) {
  в;
  if (collection.length) {
    libraryPlaceholder.style.display = 'none';
  } else {
    libraryPlaceholder.style.display = 'block';
  }
}

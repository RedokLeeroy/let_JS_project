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
};

watchCards();
if (watchedCards.length !== 0) {
  libraryPlaceholder.style.display = 'none';
}

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards(evt) {
  togglePlaceholder(watchedCards);
  gallery.innerHTML = '';
  if (watchedCards.length !== 0) {
    watchedCards.forEach(element => {
      localObj.results.push(element);
    });
    //   togglePlaceholder(watchedCards);
    // gallery.innerHTML = '';
    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
    queueBtn.classList.remove('active');
    watchedBtn.classList.add('active');
  }
}

function queueCards(evt) {
  gallery.innerHTML = '';
  togglePlaceholder(queuedCards);
  if (queuedCards.length !== 0) {
    queuedCards.forEach(element => {
      localObj.results.push(element);
    });
    //  togglePlaceholder(queuedCards);
    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
    watchedBtn.classList.remove('active');
    queueBtn.classList.add('active');
  }
}

function togglePlaceholder(collection) {
  if (collection.length) {
    libraryPlaceholder.style.display = 'none';
  } else {
    libraryPlaceholder.style.display = 'block';
  }
}

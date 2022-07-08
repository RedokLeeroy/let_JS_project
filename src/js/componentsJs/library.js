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
main.style.height = '100vh';

let currentPage = 1;

const localObj = {
  page: currentPage,
  results: [],
  total_pages: 0,
  inLocalStorage: true,
  isWatched: false,
};

// watchCards();

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards(evt) {
  gallery.innerHTML = '';
  if (watchedCards.length !== 0) {
    watchedCards.forEach(element => {
      localObj.results.push(element);
    });

    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
  }
}

function queueCards(evt) {
  gallery.innerHTML = '';
  if (queuedCards.length !== 0) {
    queuedCards.forEach(element => {
      localObj.results.push(element);
    });

    const arr = handleSuccess(localObj);
    renderModalFilm(arr);
  }
}

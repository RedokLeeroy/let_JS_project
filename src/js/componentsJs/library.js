import { createCard } from './createCard';
// import { handleSuccess } from './generateCardList';

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

const localArray = [];
const localObj = {
  page: currentPage,
  results: localArray,
  // total_pages
};
// console.log(localObj.results);

console.log(watchedCards);

// export function getFilmLocalStorage(data) {
//   console.log(data);
// }

// handleSuccess(localObj);

gallery.innerHTML = createCard(watchedCards);

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards(evt) {
  evt.preventDefault();
  gallery.innerHTML = createCard(watchedCards);
}

function queueCards(evt) {
  evt.preventDefault();
  gallery.innerHTML = createCard(queuedCards);
}

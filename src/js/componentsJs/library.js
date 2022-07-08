import { createCard } from './createCard';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
const gallery = document.querySelector('.gallery');
const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
const watchedBtn = document.getElementById('watched-button');
const queueBtn = document.getElementById('queue-button');
const libraryPlaceholder = document.querySelector('.placeholder');

watchedBtn.classList.add('active');
gallery.innerHTML = createCard(watchedCards);

if (watchedCards.length !== 0) {
  libraryPlaceholder.style.display = 'none';
}

watchedBtn.addEventListener('click', watchCards);
queueBtn.addEventListener('click', queueCards);

function watchCards(evt) {
  evt.preventDefault();
  togglePlaceholder(watchedCards);
  gallery.innerHTML = createCard(watchedCards);
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
}

function queueCards(evt) {
  evt.preventDefault();
  togglePlaceholder(queuedCards);
  gallery.innerHTML = createCard(queuedCards);
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
}

function togglePlaceholder(collection) {
  if (collection.length) {
    libraryPlaceholder.style.display = 'none';
  } else {
    libraryPlaceholder.style.display = 'block';
  }
}

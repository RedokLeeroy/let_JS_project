// import removeFilmsFromLibrary from './removeCard';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

let arrayWatched = [];
let arrayQueue = [];

if (!watchedCards) {
  localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
}

if (!watchedCards.length) {
  localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
} else {
  arrayWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
}

if (!queuedCards) {
  localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
}

if (!queuedCards.length) {
  localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
} else {
  arrayQueue = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
}

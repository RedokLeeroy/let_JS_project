const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

let arrayWatched = [];
let arrayQueue = [];

console.log(watchedCards);

if (!watchedCards) {
  localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
}

if (!queuedCards) {
  localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
}

if (!watchedCards.length) {
  localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
} else {
  arrayWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
}

if (!queuedCards.length) {
  localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
} else {
  arrayQueue = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
}

export default function addFilmsToLibrary(data) {
  const btnAddfilm = document.querySelector('.btn-list__item-btn--add');
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');

  btnAddfilm.addEventListener('click', () => {
    arrayWatched.push(data);
    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
  });
  btnAddQueie.addEventListener('click', () => {
    arrayQueue.push(data);
    localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
  });
}

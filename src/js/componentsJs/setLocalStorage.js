const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

let arrayWatched = [];
let arrayQueue = [];

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
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');

  btnAddWatch.addEventListener('click', () => {
    data.inLocalStorage = true;
    data.isWatched = true;

    btnAddWatch.textContent = 'Added!';
    btnAddWatch.disabled = true;

    const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));

    let cardIdWatch = [];

    getCardWatched.map(el => {
      cardIdWatch.push(el.id);
    });

    if (cardIdWatch.find(el => el === data.id)) {
      return;
    }

    arrayWatched.push(data);
    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
  });

  btnAddQueie.addEventListener('click', () => {
    data.inLocalStorage = true;
    data.isQueued = true;

    btnAddQueie.textContent = 'Added!';
    btnAddQueie.disabled = true;

    const getCardQueue = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

    let cardIdQueue = [];

    getCardQueue.map(el => {
      cardIdQueue.push(el.id);
    });

    if (cardIdQueue.find(el => el === data.id)) {
      return;
    }
    arrayQueue.push(data);
    localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
  });
}

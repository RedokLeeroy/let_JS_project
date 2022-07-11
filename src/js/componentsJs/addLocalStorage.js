import { removeFromWatch } from "./removeCard";
import { removeFromQueue } from "./removeCard";

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

export function addToWatch(data) {
  let arrayWatched = [];
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');
  btnAddWatch.textContent = 'add to watched';


  btnAddWatch.addEventListener('click', () => {
    const dataPage = document.querySelector('[data-page]');
    data.inLocalStorage = true;
    data.isWatched = true;

    btnAddWatch.textContent = 'Added!';
    btnAddWatch.disabled = true;

    const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
    arrayWatched = getCardWatched;

    let cardIdWatch = [];

    getCardWatched.map(el => {
      cardIdWatch.push(el.id);
    });

    if (cardIdWatch.find(el => el === data.id)) {
      return;
    }

    arrayWatched.push(data);
    localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
    if(dataPage.dataset.page === 'home'){
      btnAddWatch.disabled = false;
      removeFromWatch(data)
    }
  });
}

export function addQueue(data) {
  let arrayQueue = [];
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');
  btnAddQueie.textContent = 'add to queued';


  btnAddQueie.addEventListener('click', () => {
  const dataPage = document.querySelector('[data-page]');

    data.inLocalStorage = true;
    data.isQueued = true;

    btnAddQueie.textContent = 'Added!';
    btnAddQueie.disabled = true;

    const getCardQueue = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
    arrayQueue = getCardQueue;

    let cardIdQueue = [];

    getCardQueue.map(el => {
      cardIdQueue.push(el.id);
    });

    if (cardIdQueue.find(el => el === data.id)) {
      return;
    }
    arrayQueue.push(data);
    localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));
    if(dataPage.dataset.page === 'home'){
      btnAddQueie.disabled = false;
      removeFromQueue(data)
    }
  });
}

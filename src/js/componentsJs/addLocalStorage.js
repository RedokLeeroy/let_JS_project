const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

export function addToWatch(data) {
  let arrayWatched = [];
  console.log('add watch');
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');

  btnAddWatch.addEventListener('click', () => {
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
  });
}

export function addQueue(data) {
  let arrayQueue = [];
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');

  btnAddQueie.addEventListener('click', () => {
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
  });
}

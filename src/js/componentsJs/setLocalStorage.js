const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
let arrayWatched = [];
let arrayQueue = [];
localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));

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

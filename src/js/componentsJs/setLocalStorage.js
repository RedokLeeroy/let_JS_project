const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
let arrayWatched = [];
let arrayQueue = [];
localStorage.setItem(LIBRARY_WATCHED, JSON.stringify(arrayWatched));
localStorage.setItem(LIBRARY_QUEUE, JSON.stringify(arrayQueue));

export default function addFilmsToLibrary(data) {
  const btnAddfilm = document.querySelector('.btn-list__item-btn--add');
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');

  btnAddfilm.addEventListener('click', onBtnAddClick);
  btnAddQueie.addEventListener('click', onBtnQueieClick);

  function onBtnAddClick(evt) {
    arrayWatched.push(data);
  }

  function onBtnQueieClick(evt) {
    arrayQueue.push(data);
  }
}

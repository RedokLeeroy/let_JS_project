import addFilmsToLibrary from './setLocalStorage';
import removeFilmsFromLibrary from './removeCard';

export default function manageFilms(data) {
  const btnAddWatch = document.querySelector('.btn-list__item-btn--add');
  const btnAddQueie = document.querySelector('.btn-list__item-btn--queie');
  addFilmsToLibrary(data);
  removeFilmsFromLibrary(data);

  //  addToWatch(data)
  //  addQueue(data)

  //  removeToWatch(data)
  //  removeQueue(data)

  if (data.isWatched) {
  } else {
    btnAddWatch.textContent = 'Add to watch';
  }

  if (data.isQueued) {
  } else {
    btnAddQueie.textContent = 'Add to Queue';
  }
}

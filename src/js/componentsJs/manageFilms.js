import { addToWatch } from './addLocalStorage';
import { addQueue } from './addLocalStorage';
import { removeFromWatch } from './removeCard';
import { removeFromQueue } from './removeCard';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

export default function manageFilms(data) {
  const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
  const getCardQueued = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

  let cardIdWatch = [];
  let cardIdQueue = [];

  getCardWatched.map(el => {
    cardIdWatch.push(el.id);
  });
  getCardQueued.map(el => {
    cardIdQueue.push(el.id);
  });

  if (!cardIdWatch.find(el => el === data.id)) {
    addToWatch(data);
  } else {
    removeFromWatch(data);
  }

  if (!cardIdQueue.find(el => el === data.id)) {
    addQueue(data);
  } else {
    removeFromQueue(data);
  }
}

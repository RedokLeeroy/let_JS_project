import { ThemoviedbAPI } from '.js/API/themoviedb-api';
import { createCard } from './createCard';

const a = new ThemoviedbAPI();

export function openCard() {
  return a.getMovies().then(handleSuccess);
}

function handleSuccess(data) {
  // console.log(createCard(data.results));
  createCard(data.results);
  document.body.insertAdjacentHTML('beforeend', createCard(data.results));
}

openCard();

// console.log(openCard());
// console.log(document.body);

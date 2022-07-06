// import { ThemoviedbAPI } from '.js/API/themoviedb-api';
import { ThemoviedbAPI } from '../API/themoviedb-api';
import { createCard } from './createCard';
import { renderModalFilm } from '../templates/renderModalFilm';
import { renderPagination } from '../pagination/pagination';
const gallery = document.querySelector('.gallery');
const container = document.querySelector('.pagination-container');
const themoviedbAPI = new ThemoviedbAPI();
console.log(container);

let currentPage = 1;
export function getApiList(apiRoute) {
  if (apiRoute === 'trending') {
    themoviedbAPI.getMovies().then(handleSuccess).then(renderModalFilm);
  }
}

function handleSuccess(data) {
  let newData = data.results;
  gallery.insertAdjacentHTML('beforeend', createCard(data.results));
  gallery.innerHTML = createCard(data.results);
  renderPagination(data.page, data.total_pages, themoviedbAPI.getMovies);
  container.addEventListener('click', handlePagination);
  return newData;
}

function handlePagination(event) {
  if (event.target.tagName !== 'LI' || event.target.textContent === '...') {
    return;
  }
  const page = event.target.textContent;
  if (page === '⇽') {
    currentPage = Number(currentPage) - 1;
  } else if (page === '⇾') {
    currentPage = Number(currentPage) + 1;
  } else {
    currentPage = page;
  }
  themoviedbAPI.getMovies(currentPage).then(handleSuccess);
}

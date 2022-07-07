import { ThemoviedbAPI } from './themoviedb-api';
import { createCard } from '../componentsJs/createCard';
import { renderPagination } from '../pagination/pagination';
import { handleSuccess } from '../componentsJs/generateCardList';
import { renderModalFilm } from '../templates/renderModalFilm';

const themoviedbAPI = new ThemoviedbAPI();
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const errorText = document.querySelector('.error');
const container = document.querySelector('.pagination-container');

let currentPage = 1;

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', search);

export function search(event) {
  event.preventDefault();

  if (searchInput.value.trim() === '') {
    return;
  }

  errorText.innerHTML = '';
  currentPage = 1;

  themoviedbAPI.getSearchMovie(searchInput.value, currentPage).then(data => {
    if (data.total_results === 0) {
      errorText.innerHTML = `Search result not successful. Enter the correct movie name and`;
      return;
    }
    const arr = handleSuccess(data);
    processSuccess(data);
    renderModalFilm(arr);
  });
}

function processSuccess(data) {
  renderPagination(data.page, data.total_pages);
  container.addEventListener('click', handlePaginationForSearch);
  return data.results;
}

function handlePaginationForSearch(event) {
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
  themoviedbAPI
    .getSearchMovie(searchInput.value, currentPage)
    .then(processSuccess);
}

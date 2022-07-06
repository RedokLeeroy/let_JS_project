import { ThemoviedbAPI } from './themoviedb-api';
import { createCard } from '../componentsJs/createCard';
import { renderPagination } from '../pagination/pagination';
import { handleSuccess } from '../componentsJs/generateCardList';

const themoviedbAPI = new ThemoviedbAPI();
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const errorText = document.querySelector('.error');
const container = document.querySelector('.pagination-container');

let currentPage = 1;

export function search(event) {
  event.preventDefault();
  errorText.innerHTML = '';
  themoviedbAPI
    .getSearchMovie(searchInput.value, currentPage)
    .then(processSuccess);
}

function processSuccess(data) {
  if (data.total_results === 0 || searchInput.value === '') {
    container.innerHTML = '';
    errorText.innerHTML = `Search result not successful. Enter the correct movie name and`;
  } else {
    handleSuccess(data);
    renderPagination(data.page, data.total_pages);
  }
  container.addEventListener('click', handlePaginationForSearch);
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

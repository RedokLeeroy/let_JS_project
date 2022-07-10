import { ThemoviedbAPI } from './themoviedb-api';
import { renderPagination } from '../pagination/pagination';
import { handleSuccess } from '../componentsJs/generateCardList';
import { renderModalFilm } from '../templates/renderModalFilm';
import { handlePagination } from '../componentsJs/generateCardList';
import showSpinner from '../componentsJs/makeSpinner';

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
    errorText.classList.add('empty');
    errorText.innerHTML = 'Please enter any text';
    errorText.classList.add('empty');
    return;
  }

  errorText.innerHTML = '';
  currentPage = 1;
  showSpinner('show');

  themoviedbAPI.getSearchMovie(searchInput.value, currentPage).then(data => {
    if (data.total_results === 0) {
      errorText.innerHTML = `Search result not successful. Enter the correct movie name and`;
      errorText.style.color = '#ff001b';
      showSpinner('hide');
      return;
    }
    const arr = handleSuccess(data);
    processSuccess(data);
    renderModalFilm(arr);
    showSpinner('hide');
  });
}

function processSuccess(data) {
  if (data.total_results === 0 || searchInput.value.trim() === '') {
    container.innerHTML = '';
    errorText.innerHTML = `Search result not successful. Enter the correct movie name and`;
  } else {
    renderPagination(data.page, data.total_pages);
  }

  const arr = handleSuccess(data);
  renderModalFilm(arr);
  container.removeEventListener('click', handlePagination);
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

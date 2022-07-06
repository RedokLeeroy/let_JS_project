import { ThemoviedbAPI } from '../API/themoviedb-api';
import { createCard } from './createCard';
import { renderPagination } from '../pagination/pagination';
import { serchGenre } from './decodeGanre';

const gallery = document.querySelector('.gallery');
const container = document.querySelector('.pagination-container');
const themoviedbAPI = new ThemoviedbAPI();

let currentPage = 1;

export function getApiList(apiRoute) {
  if (apiRoute === 'trending') {
    themoviedbAPI.getMovies().then(handleSuccess);
  }
}

function handleSuccess(data) {
  data.results.forEach(element => {
    const genreName = serchGenre(element.genre_ids);
    const newObj = recordingGenre(element, genreName);
  });

  gallery.innerHTML = createCard(data.results);
  renderPagination(data.page, data.total_pages, themoviedbAPI.getMovies);
  container.addEventListener('click', handlePagination);
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

function recordingGenre(obj, arr) {
  const newObj = obj;
  newObj.genre_name = arr;

  return newObj;
}

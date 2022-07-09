import { ThemoviedbAPI } from '../API/themoviedb-api';
import { createCard } from './createCard';
import { renderModalFilm } from '../templates/renderModalFilm';
import { renderPagination } from '../pagination/pagination';
import { serchGenre } from './decodeGanre';

const gallery = document.querySelector('.gallery');
const container = document.querySelector('.pagination-container');
const themoviedbAPI = new ThemoviedbAPI();

let currentPage = 1;
export function getApiList() {
  themoviedbAPI.getMovies().then(data => {
    const arr = handleSuccess(data);
    renderModalFilm(arr);
  });
}

export function handleSuccess(data) {
  // console.log(data);
  if (!data.inLocalStorage) {
    data.results.forEach(element => {
      const genreName = serchGenre(element.genre_ids);
      const newObj = recordingGenre(element, genreName);
    });
  }

  let newData = data.results;
  // gallery.insertAdjacentHTML('beforeend', createCard(data.results));
  gallery.innerHTML = createCard(data.results);
  renderPagination(data.page, data.total_pages);
  container.addEventListener('click', handlePagination);
  return newData;
}

export function handlePagination(event) {
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
  themoviedbAPI.getMovies(currentPage).then(data => {
    const arr = handleSuccess(data);
    renderModalFilm(arr);
  });
}

function recordingGenre(obj, arr) {
  const newObj = obj;
  newObj.genre_name = arr;
  newObj.isWatched = false;
  newObj.isQueued = false;

  return newObj;
}

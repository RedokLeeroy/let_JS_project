import { ThemoviedbAPI } from './themoviedb-api';
import { createCard } from '../componentsJs/createCard';

const themoviedbAPI = new ThemoviedbAPI();
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const errorText = document.querySelector('.error');
export function search(event) {
  event.preventDefault();
  errorText.innerHTML = '';
  themoviedbAPI.getSearchMovie(searchInput.value).then(processSuccess);
}

function processSuccess(data) {
  gallery.innerHTML = createCard(data.results);
  if (data.total_results === 0) {
    errorText.innerHTML = `Search result not successful. Enter the correct movie name and`;
  }
}

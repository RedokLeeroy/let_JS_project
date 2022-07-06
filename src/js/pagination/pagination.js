import { ThemoviedbAPI } from '../API/themoviedb-api';

const refs = {
  container: document.querySelector('.pagination-container'),
  leftArrow: document.querySelector('.left-arrow'),
  rightArrow: document.querySelector('.rightArrow'),
};

const themoviedbAPI = new ThemoviedbAPI();

export function renderPagination(page, totalPages) {
  if (!page || !totalPages || totalPages === 1) {
    return;
  }
  let markup = '';
  const beforePrevPage = page - 2;
  const prevPage = page - 1;
  const nextPage = page + 1;
  const afterNextPage = page + 2;

  if (page > 1) {
    markup += `<li>&loarr;</li>`;
  }

  if (page > 2) {
    markup += `<li>1</li>`;
  }

  if (page > 4) {
    markup += `<li>...</li>`;
  }

  if (page > 3) {
    markup += `<li>${beforePrevPage}</li>`;
  }

  if (page > 1) {
    markup += `<li>${prevPage}</li>`;
  }

  markup += `<li class = 'pagination-active'>${page}</li>`;

  if (page + 1 < totalPages) {
    markup += `<li>${nextPage}</li>`;
  }

  if (page + 2 < totalPages) {
    markup += `<li>${afterNextPage}</li>`;
  }

  if (totalPages > page + 3) {
    markup += `<li>...</li>`;
  }

  if (totalPages > page) {
    markup += `<li>${totalPages}</li>`;
  }

  if (totalPages > page) {
    markup += '<li>&roarr;</li>';
  }
  refs.container.innerHTML = markup;
}

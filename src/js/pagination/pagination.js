const refs = {
  container: document.querySelector('.pagination-container'),
  leftArrow: document.querySelector('.left-arrow'),
  rightArrow: document.querySelector('.rightArrow'),
};

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
    markup += `<li class="button style_color">&loarr;</li>`;
  }

  if (page > 2) {
    markup += `<li class="button style_enpty">1</li>`;
  }

  if (page > 4) {
    markup += `<li class="button">&middot&middot&middot</li>`;
  }

  if (page > 3) {
    markup += `<li class="button style_enpty">${beforePrevPage}</li>`;
  }

  if (page > 1) {
    markup += `<li class="button style_enpty">${prevPage}</li>`;
  }

  markup += `<li class = 'pagination-active'>${page}</li>`;

  if (page + 1 < totalPages) {
    markup += `<li class="button style_enpty">${nextPage}</li>`;
  }

  if (page + 2 < totalPages) {
    markup += `<li class="button style_enpty">${afterNextPage}</li>`;
  }

  if (totalPages > page + 3) {
    markup += `<li class="button">&middot&middot&middot</li>`;
  }

  if (totalPages > page) {
    markup += `<li class="button style_enpty">${totalPages}</li>`;
  }

  if (totalPages > page) {
    markup += '<li class="button style_color">&roarr;</li>';
  }
  refs.container.innerHTML = markup;
}

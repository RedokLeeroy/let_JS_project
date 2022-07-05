import { ThemoviedbAPI } from '../API/themoviedb-api';

const themoviedbAPI = new ThemoviedbAPI();

console.log(themoviedbAPI.BASE_URL);

export function createCard(data) {
  // console.log(data);

  const {
    backdrop_path,
    id,
    original_title,
    poster_path,
    release_date,
    title,
    vote_average,
  } = data;

  return data
    .map(
      ({
        backdrop_path,
        id,
        original_title,
        poster_path,
        release_date,
        title,
        vote_average,
      }) => {
        return `
          <li class="card_item grid-item" id=${id}>
            <div class="card__image">
              <img class="image" src="${backdrop_path}" alt="${title}" loading="lazy" />
            </div>

            <h1 class="card__title">${title}</h1>
            <div class="card__info">
              <div class="card__genres">
                <span class="genre">Drama</span>
                <span class="genre">Drama</span>
              </div>
              <span class="vertical-line">|</span>
              <span class="card__year">2020</span>
              <span class='card__average'>${vote_average}</span>
            </div>
          </li>
        `;
      }
    )
    .join('');
}

// console.log(a);

// document.body.insertAdjacentHTML('beforeend', a);

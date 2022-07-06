import { ThemoviedbAPI } from '../API/themoviedb-api';

const themoviedbAPI = new ThemoviedbAPI();

export function createCard(data) {
  return data
    .map(
      ({ id, poster_path, release_date, title, vote_average, genre_name }) => {
        const average = vote_average.toString().slice(0, 3);
        const dateYear = new Date(release_date).getFullYear();
        const genreNames = genre_name.join(', ');

        return `
          <li class="card_item grid-item" id=${id}>
            <div class="card__image">
              <img class="image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            </div>

            <h1 class="card__title">${title}</h1>
            <div class="card__info">
              <div class="card__genres">
                <span class="genre">${genreNames}</span>
              </div>
              <span class="vertical-line">|</span>
              <span class="card__year">${dateYear}</span>
              <span class='card__average on-library'>${average}</span>
            </div>
          </li>
        `;
      }
    )
    .join('');
}

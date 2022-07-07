import { ThemoviedbAPI } from '../API/themoviedb-api';

const themoviedbAPI = new ThemoviedbAPI();

export function createCard(data) {
  return data
    .map(
      ({ id, poster_path, release_date, title, vote_average, genre_name }) => {
        const average = vote_average.toString().slice(0, 3);

        let dateYear; //\\ доробити рік
        dateYear = new Date(release_date).getFullYear();

        let genreNames;
        let verticalLine = `<span class="vertical-line">|</span>`;
        if (genre_name.length > 3) {
          genreNames = genre_name.slice(0, 2).join(', ') + ', Other';
        } else if (genre_name.length === 0) {
          verticalLine = '';
          genreNames = '';
        } else {
          genreNames = genre_name.join(', ');
        }

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
              ${verticalLine}
              <span class="card__year">${dateYear}</span>
              <span class='card__average on-library'>${average}</span>
            </div>
          </li>
        `;
      }
    )
    .join('');
}

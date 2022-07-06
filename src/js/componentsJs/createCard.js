import { ThemoviedbAPI } from '../API/themoviedb-api';
import { serchGenre } from './decodeGanre';

const themoviedbAPI = new ThemoviedbAPI();

export function createCard(data) {

  // const {
  //   backdrop_path,
  //   genre_ids,
  //   id,
  //   original_title,
  //   poster_path,
  //   release_date,
  //   title,
  //   vote_average,
  // } = data;

  return data
    .map(
      ({
        backdrop_path,
        genre_ids,
        id,
        original_title,
        poster_path,
        release_date,
        title,
        vote_average,
      }) => {
        const average = vote_average.toString().slice(0,3)
        const dateYear =new Date(release_date).getFullYear()
        // const genres =serchGenre([genre_ids])
        // console.log(dateYear);


        return `
          <li class="card_item grid-item" id=${id}>
            <div class="card__image">
              <img class="image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            </div>

            <h1 class="card__title">${title}</h1>
            <div class="card__info">
              <div class="card__genres">
                <span class="genre">Drama</span>
                <span class="genre">Drama</span>
              </div>
              <span class="vertical-line">|</span>
              <span class="card__year">${dateYear}</span>
              <span class='card__average'>${average}</span>
            </div>
          </li>
        `;
      }
    )
    .join('');
}


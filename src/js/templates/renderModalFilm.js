import closeModal from '../componentsJs/toogleModal';
import addFilmsToLibrary from '../componentsJs/setLocalStorage';

const modalFilmCard = document.querySelector('.modal-film');
const getList = document.querySelector('.gallery');
let addLib;
let cards;

function onclick(evt) {
  if (!evt.target.closest('li')) {
    return;
  }
  const ids = evt.target.closest('li').id;
  renderFilms(ids);
  closeModal();
  addFilmsToLibrary(addLib);
}

function renderFilms(id) {
  const obj = cards.find(option => option.id === Number(id));
  addLib = obj;
  const {
    original_title,
    popularity,
    vote_average,
    vote_count,
    overview,
    poster_path,
    title,
    genre_name,
  } = obj;

  const average = vote_average.toString().slice(0, 3);
  const popularityCalc = Math.floor(popularity);
  const genreNames = genre_name.join(', ');

  const renderFilm = `
  <div class='backdrop'>
    <div class='modal-container'>
      <button class="btn-close" type="button" data-action='close-modal-1'></button>
      <div class='cont-preview' >
        <img class='cont-prew__image' src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
      </div>
      
      <div class='modal-content'>
        <h3 class='film-title'>${original_title}</h3>
          <table class='table'>
        <tbody>
          <tr>
            <td><p class='table-text__left'>Vote / Votes</p></td>
            <td>
              <p class='table-text__right'>
                <span class='average'>${average}</span>
                <span class='awerage-dot'> /</span> ${vote_count}
              </p>
            </td>
            </tr>
          <tr>
            <td><p class='table-text__left'>Popularity</p></td>
            <td><p class='table-text__right'>${popularityCalc}</p></td>
          </tr>
            <tr>
            <td><p class='table-text__left'>Original Title</p></td>
            <td><p class='table-text__right '>${original_title}</p></td>
          </tr>
            <tr>
            <td><p class='table-text__left'>Genre</p></td>
            <td><p class='table-text__right '>${genreNames}</p></td>
          </tr>
        </tbody>
        </table>
          <p class='descr-text'>About</p>
          <p class='descr-text-content '> ${overview}</p>
        <ul class='btn-list'>
          <li class='btn-list__item'>
           <button class='btn-list__item-btn--add' type="button">add to Watched</button>
          </li>
          <li class='btn-list__item'>
            <button class='btn-list__item-btn--queie' type="button">add to queue</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `;

  return modalFilmCard.insertAdjacentHTML('afterbegin', renderFilm);
}
export function renderModalFilm(data) {
  getList.addEventListener('click', onclick);

  cards = data;
}

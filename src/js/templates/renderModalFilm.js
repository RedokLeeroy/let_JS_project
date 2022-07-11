import closeModal from '../componentsJs/toogleModal';
import manageFilms from '../componentsJs/manageFilms';

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';
const modalFilmCard = document.querySelector('.modal-film');
const getList = document.querySelector('.gallery');
const htmlElement = document.querySelector('html');
const dataPage = document.querySelector('[data-page]');
const activeWatched = document.querySelector('.active__watched');
const activeQueued = document.querySelector('.active__queued');

let positionFromTop;
let addLib;
let cards;

function getYPosition() {
  let positionFromTop =
    window.pageYOffset || document.documentElement.scrollTop;
  return positionFromTop;
}

function onclick(evt) {
  if (!evt.target.closest('li')) {
    return;
  }
  const ids = evt.target.closest('li').id;
  renderFilms(ids);
  manageFilms(addLib);
  positionFromTop = getYPosition();
  closeModal(positionFromTop);

  htmlElement.style.top = ` -${positionFromTop}px`;
  htmlElement.style.left = `0px`;
  htmlElement.classList.add('hidden');
}

function renderFilms(id) {
  const watchedCards = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));
  const queuedCards = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));
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

  let coverImage = 'https://i.ibb.co/JyBCdzw/sinema-empty.jpg';
  let originPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (!poster_path) {
    originPoster = coverImage;
  }

  const inWatchedId = watchedCards.find(element => element.id === Number(id));
  const inQueuedId = queuedCards.find(element => element.id === Number(id));

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
            <td><p class='table-text__left'>${
              genreNames.length ? 'Genre' : ''
            }</p></td>
            <td><p class='table-text__right '>${genreNames}</p></td>
          </tr>
        </tbody>
        </table>
          <p class='descr-text'>About</p>
          <p class='descr-text-content '> ${overview}</p>
        <ul class='btn-list'>
          <li class='btn-list__item'>
           <button class='btn-list__item-btn--add' type="button">${
             inWatchedId ? 'remove' : 'add to watched'
           }</button>
          </li>
          <li class='btn-list__item'>
            <button class='btn-list__item-btn--queie' type="button">${
              inQueuedId ? 'remove' : 'add to queued'
            }</button>
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

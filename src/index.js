import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
import callModal from './js/componentsJs/modalFooter';
import { getApiList } from './js/componentsJs/generateCardList';
import { search } from './js/API/search';

const searchForm = document.querySelector('.search-form');

renderModalFilm();
getApiList('trending');
searchForm.addEventListener('submit', search);

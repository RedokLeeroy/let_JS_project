import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
import { getApiList } from './js/componentsJs/generateCardList';
import callModal from './js/componentsJs/modalFooter';
import { search } from './js/API/search';

const searchForm = document.querySelector('.search-form');

getApiList();
searchForm.addEventListener('submit', search);

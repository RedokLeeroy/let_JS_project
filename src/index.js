import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
import { getApiList } from './js/componentsJs/generateCardList';
import callModal from './js/componentsJs/modalFooter';

renderModalFilm();

getApiList('trending');

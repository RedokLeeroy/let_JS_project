import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
import callModal from './js/componentsJs/modalFooter';
renderModalFilm();

import { getApiList } from './js/componentsJs/generateCardList';

getApiList('trending')

import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
renderModalFilm();
import './js/componentsJs/modalFooter';

import { ThemoviedbAPI } from './js/API/themoviedb-api';

const themoviedbAPI = new ThemoviedbAPI();

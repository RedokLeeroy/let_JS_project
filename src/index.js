import './sass/index.scss';
import './js/componentsJs/setLocalStorage'
import { renderModalFilm } from './js/templates/renderModalFilm';
import { getApiList } from './js/componentsJs/generateCardList';
import callModal from './js/componentsJs/modalFooter';
import { search } from './js/API/search';
import topFunction from './js/componentsJs/scroolUp';

getApiList();

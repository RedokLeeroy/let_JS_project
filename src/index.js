import './sass/index.scss';
import { renderModalFilm } from './js/templates/renderModalFilm';
import { getApiList, getData } from './js/componentsJs/generateCardList';
import callModal from './js/componentsJs/modalFooter';

import { getApiList } from './js/componentsJs/generateCardList';

getApiList('trending');

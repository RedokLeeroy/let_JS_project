// import { ThemoviedbAPI } from '.js/API/themoviedb-api';
import { ThemoviedbAPI } from '../API/themoviedb-api';
import { createCard } from './createCard';

const gallery = document.querySelector('.gallery')

const themoviedbAPI = new ThemoviedbAPI();

export function getApiList(apiRoute){
  if(apiRoute === 'trending'){
    themoviedbAPI.getMovies().then(handleSuccess)
  }
}

function handleSuccess(data){
  gallery.insertAdjacentHTML('beforeend', createCard(data.results))
}
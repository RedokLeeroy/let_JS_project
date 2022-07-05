// import { ThemoviedbAPI } from '.js/API/themoviedb-api';
import { ThemoviedbAPI } from '../API/themoviedb-api';
import { createCard } from './createCard';

const gallery = document.querySelector('.gallery')

const themoviedbAPI = new ThemoviedbAPI();

export function getApiList(apiRoute){
  if(apiRoute === 'trending'){
    themoviedbAPI.getMovies().then(handleSuccess).then(getData)
  }
}

function handleSuccess(data){
  let newData = data.results
  gallery.insertAdjacentHTML('beforeend', createCard(data.results))
  return newData
}


export function getData(arr){

}

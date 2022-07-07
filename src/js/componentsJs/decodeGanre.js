import { ThemoviedbAPI } from '../API/themoviedb-api';

const themoviedbAPI = new ThemoviedbAPI();

themoviedbAPI.getGanres().then(setGenreArr);

let genresArr;

function setGenreArr(data) {
  genresArr = data.genres;
}

export function serchGenre(curentArr) {
  let curentGenres = [];

  curentArr.forEach(element => {
    let obj = genresArr.find(el => el.id === element);
    curentGenres.push(obj);
  });

  const genrsNames = curentGenres.map(el => el.name);

  return genrsNames;
}

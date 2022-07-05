import { ThemoviedbAPI } from "../API/themoviedb-api";

const themoviedbAPI = new ThemoviedbAPI()

themoviedbAPI.getGanres().then(decodeGanre)

 function decodeGanre(data){
  const a = data.genres
  // console.log(a);
  // a.map(b => console.log(b))
  
}

export function serchGenre(arr){
  arr.forEach(element => {
  console.log(element);

  
    
  });
}
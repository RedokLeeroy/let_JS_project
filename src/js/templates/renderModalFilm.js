const modalFilmCard = document.querySelector('.modal-film');
const getList = document.querySelector('.gallery');

export function renderModalFilm(data) {
  getList.addEventListener('click', evt => {
    const ids = evt.path[2].id;
    renderFilms(ids);
  });
  function renderFilms(id) {
    const obj = data.find(option => option.id === Number(id));
    console.log(obj);
    const { original_title, popularity, vote_average, vote_count, overview } =
      obj;
    modalFilmCard.innerHTML = '';
    const average = vote_average.toString().slice(0, 3);

    const renderFilm = `
  <div class='backdrop js-backdrop'>
  <div class='modal-container'>
  <button class="btn-close" type="button" data-action='close-modal'></button>
  <div class='image-content'></div>
   
 <div class='modal-content'>
 <h3 class='film-title'>${original_title}</h3>
     <table class='table'>
  <tbody>
    <tr>
      <td><p class='table-text__left'>Vote / Votes</p></td>
      <td><p class='table-text__right'><span class='average'>${average}</span> / ${vote_count}</p></td>
      </tr>
    <tr>
      <td><p class='table-text__left'>Popularity</p></td>
      <td><p class='table-text__right'>${popularity}</p></td>
     </tr>
      <tr>
      <td><p class='table-text__left'>Original Title</p></td>
      <td><p class='table-text__right '>${original_title}</p></td>
     </tr>
      <tr>
      <td><p class='table-text__left'>Genre</p></td>
      <td><p class='table-text__right '>API</p></td>
     </tr>
   </tbody>
</table>
 
     <p class='descr-text'>About</p>
    <p class='descr-text content '> ${overview}</p>
   
    
  <ul class='btn-list'>
    <li class='btn-list__item'>
      <a class='class='btn-list__item-link' href=""><button class='btn-list__item-btn--add' type="button">add to Watched</button></a>
    </li>
    <li class='btn-list__item'>
      <a class='class='btn-list__item-link'  href=""><button class='btn-list__item-btn--queie' type="button">add to queue</button></a>
    </li>
  </ul>
</li>
  </ul>
  </div>
  </div>
  </div>
 
  `;

    return modalFilmCard.insertAdjacentHTML('afterbegin', renderFilm);
  }
}

// <div class='backdrop js-backdrop'>
// </div>

const modalFilmCard = document.querySelector('.modal-film');

export function renderModalFilm(img) {
  const renderFilm = `
  <div class='modal-container'>
  <button class="btn-close" type="button"></button>
  <div class='image-content'></div>
   
 <div class='modal-content'>
 <h3 class='film-title'>film name</h3>
     <table class='table'>
  <tbody>
    <tr>
      <td><p class='table-text__left'>Vote / Votes</p></td>
      <td><p class='table-text__right'>API</p></td>
      </tr>
    <tr>
      <td><p class='table-text__left'>Popularity</p></td>
      <td><p class='table-text__right'>API</p></td>
     </tr>
      <tr>
      <td><p class='table-text__left'>Original Title</p></td>
      <td><p class='table-text__right'>API</p></td>
     </tr>
      <tr>
      <td><p class='table-text__left'>Genre</p></td>
      <td><p class='table-text__right'>API</p></td>
     </tr>
   </tbody>
</table>
 
     <p class='descr-text'>About</p>
    <p class='descr-text content '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea, suscipit accusamus sapiente recusandae doloremque ipsam repudiandae a possimus obcaecati dicta reprehenderit aliquam deleniti minima, voluptatum sed molestiae et natus
    </p>
    
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
  </div>`;

  return modalFilmCard.insertAdjacentHTML('beforeend', renderFilm);
}

export default function closeModal() {
  const closeModalBtn = document.querySelector('[data-action="close-modal-1"]');
  const modalFilmCard = document.querySelector('.modal-film');
  const backdropClose = document.querySelector('.backdrop');

  closeModalBtn.addEventListener('click', evt => {
    modalFilmCard.innerHTML = '';
  });
  backdropClose.addEventListener('click', evt => {
    if (evt.currentTarget === evt.target) {
      modalFilmCard.innerHTML = '';
    }
  });
  window.addEventListener('keydown', onEscape);

  function onEscape(evt) {
    if (evt.code === 'Escape') {
      modalFilmCard.innerHTML = '';
    }
  }
}

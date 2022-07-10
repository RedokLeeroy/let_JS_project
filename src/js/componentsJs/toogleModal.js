export default function closeModal(top) {
  const closeModalBtn = document.querySelector('[data-action="close-modal-1"]');
  const modalFilmCard = document.querySelector('.modal-film');
  const backdropClose = document.querySelector('.backdrop');
  const htmlElement = document.querySelector('html')

  closeModalBtn.addEventListener('click', evt => {
    modalFilmCard.innerHTML = '';

    
    htmlElement.style.top = null
    htmlElement.style.left = null
    htmlElement.classList.remove('hidden');
    window.scrollTo({top: top})
  });
  backdropClose.addEventListener('click', evt => {
    if (evt.currentTarget === evt.target) {
      modalFilmCard.innerHTML = '';

      htmlElement.style.top = null
      htmlElement.style.left = null
      htmlElement.classList.remove('hidden');
      window.scrollTo({top: top})
    }
  });
  window.addEventListener('keydown', onEscape);

  function onEscape(evt) {
    if (evt.code === 'Escape') {
      modalFilmCard.innerHTML = '';
      window.removeEventListener('keydown', onEscape);

      htmlElement.style.top = null
      htmlElement.style.left = null
      htmlElement.classList.remove('hidden');
      window.scrollTo({top: top})
    }
  }
}

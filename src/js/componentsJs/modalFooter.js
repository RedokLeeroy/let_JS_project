const refs = {
  openModalBtn: document.querySelector('.open-btn'),
  closeModalBtn: document.querySelector('.close-btn'),
  modal: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  refs.modal.classList.toggle('is-hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      return toggleModal(event);
    }
  });
}

const refs = {
  openModalBtn: document.querySelector('.open-btn'),
  closeModalBtn: document.querySelector('.close-btn'),
  modal: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  refs.modal.classList.toggle('is-hidden');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleModal(event);
  }
});

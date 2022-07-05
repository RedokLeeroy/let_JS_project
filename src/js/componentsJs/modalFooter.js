const refs = {
  openModalBtn: document.querySelector('.open-btn'),
  closeModalBtn: document.querySelector('.close-btn'),
  modal: document.querySelector('.modal'),
};
console.log(refs.closeModalBtn);
console.log(refs.openModalBtn);
console.log(refs.modal);

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  refs.modal.classList.toggle('is-hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);
}
export default function callModal() {
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      return toggleModal(event);
    }
  });
}

const LIBRARY_WATCHED = 'library-watched';
const LIBRARY_QUEUE = 'library-queie';

export function addFlags() {
  const imageDivArr = document.querySelectorAll('.card__image');
  const getCardWatched = JSON.parse(localStorage.getItem(LIBRARY_WATCHED));

  const getCardQueued = JSON.parse(localStorage.getItem(LIBRARY_QUEUE));

  for (let i = 0; i < imageDivArr.length; i += 1) {
    const id = imageDivArr[i].dataset.id;
    const isWatched = getCardWatched.find(el => el.id === +id);
    const isQueued = getCardQueued.find(el => el.id === +id);

    if (isWatched) {
      imageDivArr[i].classList.add('watched');
    }
    if (isQueued) {
      imageDivArr[i].classList.add('queued');
    }
  }
}

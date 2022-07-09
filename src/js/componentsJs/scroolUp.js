import { Loading } from 'notiflix';

const myButton = document.querySelector('#return-to-top');
const paginationScroll = document.querySelector('.pagination-container');
paginationScroll.addEventListener('click', topFunction);
myButton.addEventListener('click', topFunction);

//  function arrowUpScroll() {}

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

export default function topFunction(evt) {
  console.log(evt.currentTarget);
  if (evt.target.closest('li') || evt.currentTarget.tagName === 'A') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // if (evt.currentTarget.tagName === 'A') {
  //   console.log(123);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
  // window.scrollTo({ top: 0, behavior: 'smooth' });
}

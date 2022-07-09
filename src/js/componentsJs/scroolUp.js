import { Loading } from 'notiflix';

const myButton = document.querySelector('#return-to-top');
myButton.addEventListener('click', topFunction);

export default function arrowUpScroll() {}

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const spinner = document.querySelector('.load-wrapp');

export default function showSpinner(search) {
  if (search === 'show') {
    spinner.classList.remove('is-hidden');
  }
  if (search === 'hide') {
    spinner.classList.add('is-hidden');
  }
}

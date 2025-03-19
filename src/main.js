import pixabayApi from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  renderGallery,
  resetForm,
  responseError,
  showLoader,
} from './js/render-functions';

const inputField = document.querySelector("[type='text']");
const form = document.querySelector('.form');
let input;

const isInputvalid = input => {
  return input.trim() !== '';
};

const handleSubmit = (event, input) => {
  event.preventDefault();
  if (!isInputvalid(input)) return;

  clearGallery();
  showLoader();

  pixabayApi(input)
    .then(data => {
      const hits = data.hits;
      if (hits.length === 0) {
        responseError();
        return;
      }
      renderGallery(hits);
    })
    .catch(error => {
      console.log('error', error);
    })
    .finally(hideLoader);

  resetForm();
};

form.addEventListener('submit', event => handleSubmit(event, input));
inputField.addEventListener('input', e => {
  input = e.target.value;
});

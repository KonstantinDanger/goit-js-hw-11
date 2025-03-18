import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function responseError() {
  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
    timeout: 3000,
  });
}

export function resetForm() {
  document.querySelector('.form').reset();
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  images.forEach(image =>
    gallery.insertAdjacentHTML('beforeend', createImageItem(image))
  );
  lightbox.refresh();
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader.classList.contains('hidden')) loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (!loader.classList.contains('hidden')) loader.classList.add('hidden');
}

export function clearGallery() {
  document.querySelector('.gallery').textContent = '';
}

function createImageItem(image) {
  return `
    <li class="galleryItem">
        <a href="${image.largeImageURL}" disabled="true">
          <img src="${image.webformatURL}" alt="${image.tags}" data-source="${image.largeImageURL}"/>
        </a>
        <div class="imageInfoContainer">
            <div class="imageInfo">
                Likes 
                <div>
                    ${image.likes}
                </div>
            </div>
            <div class="imageInfo">
                Views 
                <div>
                    ${image.views}
                </div>
            </div>
            <div class="imageInfo">
                Comments 
                <div>
                    ${image.comments}
                </div>
            </div>
            <div class="imageInfo">
                Downloads
                <div>
                ${image.downloads}
                </div>
            </div>
        </div>
    </li>`;
}

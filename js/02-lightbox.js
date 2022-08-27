import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryLib = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryLib.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class = "gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
    </a>
    </div>
    `;
    })
    .join('');
}


new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

console.log(galleryItems);

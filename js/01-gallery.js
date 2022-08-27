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

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()


// function showModal(event) {

// }

console.log(galleryItems);

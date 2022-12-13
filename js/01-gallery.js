import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(item => {
  galleryEl.insertAdjacentHTML('beforeend',
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    </a>
    </div>`)
})

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  document.addEventListener('keydown', onKeypress);
  function onKeypress(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onKeypress);
    }
  }
}
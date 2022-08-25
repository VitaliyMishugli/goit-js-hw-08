import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import  basicLightbox from 'basiclightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGalleryItemMarkup = ({ original, preview, description }) => {
  return ` 
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup);

gallery.addEventListener('click', e => {
  e.preventDefault();
  //Створюємо модалку для одного зображення
  const instance = basicLightbox.create(`
      <img src="${e.target.src}" width="800" height="600">
  `);

  instance.show();
  if (instance.visible()) {
    window.addEventListener('keyup', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        instance.close();
      }
    });
  }

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});




import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const makeGalleryItemMarkup = ({ original, preview, description }) => {
  return `
    <a href="${original}" class="gallery__item">
      <img class="gallery__image" src="${preview}" alt="${description}" title="The nice picture"/>
    </a>
  `;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

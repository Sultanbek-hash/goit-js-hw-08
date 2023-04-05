// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryShow = document.querySelector('.gallery');

const greateImportImages = galleryListImages(galleryItems);

galleryShow.insertAdjacentHTML('beforeend', greateImportImages);

function galleryListImages(galleryItems){
    return galleryItems
    .map(({original, preview, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join("");
}

galleryShow.addEventListener('click', (evt) =>{
    evt.preventDefault();
    const isImeagesSwatchEl = evt.target.classList.contains('gallery__image');
    if(!isImeagesSwatchEl){
    return;
    }
});

const lightbox = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
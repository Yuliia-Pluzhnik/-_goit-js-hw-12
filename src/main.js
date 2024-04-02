import { getImage } from './js/pixabay-api.js';
import { showLoader, hideLoader, displayImages, createMarkup } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  form: document.querySelector(".search-form"),
  input: document.querySelector(".search-input"),
  list: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};

refs.form.addEventListener("submit", e => {
    e.preventDefault();
    const searchQuery = refs.input.value;
    if (searchQuery === "") {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
        position: "topRight"
      });
      return;
    }
  
    showLoader(refs.loader);
  
    getImage(searchQuery)
      .then(data => {
        displayImages(data.hits, refs.list, iziToast, lightbox, createMarkup);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        hideLoader(refs.loader);
      });
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

window.onload = () => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
};

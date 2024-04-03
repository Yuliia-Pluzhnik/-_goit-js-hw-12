import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-api.js";
import { renderImage } from "./js/render-functions.js";


export const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: "alt",
    captionDelay: 250,
});

export const refs = {
    form: document.querySelector(".form"),
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.querySelector("button"),
    loadBtn: document.querySelector(".load-more-button"),
    loader: document.querySelector(".loader"),
    gallery: document.querySelector(".gallery"),
}


export let query = "";
export let currentPage = 1;
export let pageLimit = 15;
let maxPage = 0;

hideLoader();
hideLoadBtn();

refs.form.addEventListener("submit", onFormSubmit)

async function onFormSubmit (event) {
    event.preventDefault();
    currentPage = 1;
    refs.gallery.innerHTML = "";
    query = refs.searchInput.value.trim();
    if (query !== '') {
        try {
            const data = await getImages(query, currentPage);
            
            maxPage = Math.ceil(data.totalHits / pageLimit);
            renderImage(data);
            hideLoader();
        checkBtnStatus();

        } catch (error) {
            console.log(error);
            displayMessage("An error occurred while fetching data.");
        }

    } else {
        displayMessage("Empty field!");
        checkBtnStatus();
    }
};


refs.loadBtn.addEventListener("click", handleLoadMore);

async function handleLoadMore (){
    currentPage += 1;

    try {
        const data = await getImages(query, currentPage);
hideLoader();
        renderImage(data);

        maxPage = Math.ceil(data.totalHits / pageLimit);
        checkBtnStatus();
        if (currentPage >= maxPage) {
           displayMessage("Sorry, you have reached the end of collection.")
       }
       requestAnimationFrame(() => {
        const item = document.querySelector(".gallery-item");
        const rect = item.getBoundingClientRect().height;
        scrollBy({
            top: rect,
            behavior: "smooth",
        });
        })
     
    } catch (error) {
        console.log(error);
        displayMessage("An error occurred while fetching data.");
        checkBtnStatus();
    }
};


export function displayMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: "topRight",
        backgroundColor: "skyblue",
    });
}

export function hideLoader() {
    refs.loader.style.display = "none";
}

export function showLoader() {
    refs.loader.style.display = "block";
}

function checkBtnStatus() {
    if (currentPage >= maxPage) {
      hideLoadBtn();
    } else {
      showLoadBtn();
    }
  }

function hideLoadBtn() {
    refs.loadBtn.style.display = "none";
}

function showLoadBtn() {
    refs.loadBtn.style.display = "block";    
}

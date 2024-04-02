export function showLoader(loaderElement) {
    if (loaderElement) {
        loaderElement.style.display = 'flex';
    }
}
  
export function hideLoader(loaderElement) {
    if (loaderElement) {
        loaderElement.style.display = 'none';
    }
}

export function displayImages(images, listElement, iziToast, lightbox, createMarkup) {
    listElement.innerHTML = '';
  
    if (images.length === 0) {
        iziToast.info({
            title: 'Info',
            message: 'Sorry, there are no images matching your search query. Please try again.',
            position: "topRight"
        });
        return;
    };
  
    const markup = createMarkup(images);
    listElement.innerHTML = markup;
  
    lightbox.refresh();
    hideLoader(loaderElement);
}

export function createMarkup(images) {
    return images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
          />
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${likes}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${views}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${comments}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${downloads}</p>
          </div>
        </div>
      </li>`
      )
      .join('');
}

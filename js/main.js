import images from "../gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");

const galleryElements = images.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`;
});

galleryContainer.insertAdjacentHTML("beforeend", galleryElements.join(""));

galleryContainer.addEventListener("click", onClick);
const lightboxContainer = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  lightboxContainer.classList.add("is-open");
  lightboxImage.src = evt.target.dataset.source;
}

lightboxContainer.addEventListener("click", onModalButtonClose);
function onModalButtonClose(evt) {
  if (evt.target.dataset.action === "close-lightbox") {
    lightboxContainer.classList.remove("is-open");
    lightboxImage.src = "";
  }
}

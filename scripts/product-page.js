let imageIndex = 1;
triggerSlides(imageIndex);

// Next/previous controls
function controlSlides(n) {
  triggerSlides((imageIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  triggerSlides((imageIndex = n));
}

function triggerSlides(n) {
  let i;
  let slidesImage = document.querySelectorAll("[data-slides-image]");
  let thumbnailElement = document.querySelectorAll("[data-thumbnail-Image]");
  if (n > slidesImage.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = slidesImage.length;
  }
  for (i = 0; i < slidesImage.length; i++) {
    slidesImage[i].style.display = "none";
  }
  for (i = 0; i < thumbnailElement.length; i++) {
    thumbnailElement[i].className = thumbnailElement[i].className.replace(
      " active",
      ""
    );
  }
  slidesImage[imageIndex - 1].style.display = "block";
  thumbnailElement[imageIndex - 1].classList.toggle("active");
}

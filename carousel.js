document.querySelectorAll(".scene-carousel").forEach((carousel) => {
  const image = carousel.querySelector("img");
  const count = carousel.querySelector(".carousel-count");
  const images = carousel.dataset.images.split("|");
  let currentIndex = 0;

  const showImage = () => {
    image.src = images[currentIndex];
    image.alt = `${carousel.dataset.genre} scene photo ${currentIndex + 1}`;
    count.textContent = `${currentIndex + 1} / ${images.length}`;
  };

  carousel.querySelector("[data-direction='previous']").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  carousel.querySelector("[data-direction='next']").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

  showImage();
});
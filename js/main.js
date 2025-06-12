document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("heroSlider");

  const backgrounds = [
    'url("assets/hero-slider-bg1.webp")',
    'url("assets/hero-slider-bg3.webp")',
    'url("assets/banner-bg-1.webp")',
  ];

  let index = 1; // Start from second since first already in CSS

  function slideBackground() {
    hero.style.backgroundImage = backgrounds[index];
    index = (index + 1) % backgrounds.length;
  }

  setInterval(slideBackground, 5000);
});

const images = document.querySelectorAll(".img-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.style.display = "flex";
}

images.forEach((img, index) => {
  img.addEventListener("click", () => showLightbox(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Optional: Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

$(document).ready(function () {
  $(".testimonial-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: 80,
        },
      },
    ],
  });
});

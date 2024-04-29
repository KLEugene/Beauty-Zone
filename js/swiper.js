const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween:16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slide-arrow.next",
    prevEl: ".slide-arrow.prev",
  },
});

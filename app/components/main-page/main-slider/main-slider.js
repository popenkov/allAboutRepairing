const mainSliderswiper = new Swiper('.main__slider-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.main__slider-button-next',
    prevEl: '.main__slider-button-prev',
  },
});

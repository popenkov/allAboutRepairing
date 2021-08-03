const newVideosSwiper = new Swiper('.new-videos__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    loopAdditionalSlides: 3,
  

    // Navigation arrows
    navigation: {
      nextEl: '.new-videos__slider-button-next',
      prevEl: '.new-videos__slider-button-prev',
    },


    breakpoints: {
      // when window width is >= 414
      600: {
        slidesPerView: 1.36,
        spaceBetween: 24
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // when window width is >= 1000
      1150: {
        slidesPerView: 3,
        spaceBetween: 24
      },

    }
  
  });
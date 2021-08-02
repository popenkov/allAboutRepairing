const newVideosSwiper = new Swiper('.new-videos__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  

    // Navigation arrows
    navigation: {
      nextEl: '.new-videos__slider-button-next',
      prevEl: '.new-videos__slider-button-prev',
    },


    breakpoints: {
      // when window width is >= 414
      414: {
        slidesPerView: 1.36,
        spaceBetween: 24
      },
      // when window width is >= 1000
      1000: {
        slidesPerView: 4,
        spaceBetween: 24
      },

    }
  
  });
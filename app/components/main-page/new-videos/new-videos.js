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
      // when window width is >= 320px
      414: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 4,
        spaceBetween: 24
      },

    }
  
  });
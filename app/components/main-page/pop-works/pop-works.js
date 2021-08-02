const popWorksSwiper = new Swiper('.pop-works__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   
  

    // Navigation arrows
    navigation: {
      nextEl: '.pop-works__slider-button-next',
      prevEl: '.pop-works__slider-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      414: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 3,
        spaceBetween: 24
      },


      1440: {
        slidesPerView: 3,
        spaceBetween: 24
      }

    }
  
  });
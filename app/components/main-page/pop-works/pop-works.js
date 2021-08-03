const popWorksSwiper = new Swiper('.pop-works__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 24,
   
  

    // Navigation arrows
    navigation: {
      nextEl: '.pop-works__slider-button-next',
      prevEl: '.pop-works__slider-button-prev',
    },

    breakpoints: {
      // when window width is >= 414x
      700: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      1150: {
        slidesPerView: 2,
        spaceBetween: 24,
      },


      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      }

    }
  
  });
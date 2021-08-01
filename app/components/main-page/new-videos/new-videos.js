const newVideosSwiper = new Swiper('.new-videos__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 24,
  

    // Navigation arrows
    navigation: {
      nextEl: '.pop-works__slider-button-next',
      prevEl: '.pop-works__slider-button-prev',
    },
  
  });
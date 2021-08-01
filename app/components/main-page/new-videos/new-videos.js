const newVideosSwiper = new Swiper('.new-videos__slider-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    spaceBetween: 24,
  

    // Navigation arrows
    navigation: {
      nextEl: '.new-videos__slider-button-next',
      prevEl: '.new-videos__slider-button-prev',
    },
  
  });
let { clientWidth } = document.body;
const swiperContainer = document.querySelector('.pop-articles__items-swiper');
const swiperWrapper = document.querySelector('.pop-articles__items');
let popArticlesSwiper;
const MAX_MOBILE_WIDTH = 769;

const sliderInit = () => {
    console.log('sliderInit')
    popArticlesSwiper  = new Swiper('.pop-articles__items-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.35,
        spaceBetween: 20,
        loopAdditionalSlides: 3,

        breakpoints: {
            // when window width is >= 414x
            620: {
                slidesPerView: 1.35,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            }
      
          }
      
    })

  
  

  swiperContainer.classList.remove('pop-articles--no-swiper');
}

const swiperDestroy = () => {
    console.log('swiperDestroy', popArticlesSwiper)
    popArticlesSwiper.destroy(false, true);

    swiperContainer.classList.add('pop-articles--no-swiper');
    /* swiperWrapper.style.transform = 'translate3d(0px, 0px, 0px);'; */
    swiperWrapper.removeAttribute('style');
    swiperWrapper.childNodes.forEach(item => item.removeAttribute('style'))
    swiperWrapper.style = ' ';
    
}


if (clientWidth< MAX_MOBILE_WIDTH && !swiperContainer.classList.contains('swiper-container-initialized')) {
    sliderInit();
}

const resizeHandlerSlider = () => {
    let { clientWidth } = document.body;
    console.log(clientWidth);
    if (clientWidth< MAX_MOBILE_WIDTH && !swiperContainer.classList.contains('swiper-container-initialized')) {
        sliderInit();
    } else if (clientWidth >= MAX_MOBILE_WIDTH && swiperContainer.classList.contains('swiper-container-initialized')) {

        swiperDestroy(); 
    }
}

window.addEventListener('resize', resizeHandlerSlider);



let { clientWidth } = document.body;
const swiperContainer = document.querySelector('.pop-articles__items-swiper');
let popArticlesSwiper;

const sliderInit = () => {
    console.log('sliderInit')
    popArticlesSwiper  = new Swiper('.pop-articles__items-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.35,
        spaceBetween: 20
      
    })

  
  

  swiperContainer.classList.remove('pop-articles--no-swiper');
}

const swiperDestroy = () => {
    console.log('swiperDestroy')
    popArticlesSwiper.destroy(true, true)
    swiperContainer.classList.add('pop-articles--no-swiper');
}


if (clientWidth< 415) {
    sliderInit();
}

const resizeHandlerSlider = () => {
    let { clientWidth } = document.body;
    console.log(clientWidth);
    if (clientWidth< 415) {
        sliderInit();
    } else if (clientWidth >= 415 && swiperContainer.classList.contains('swiper-container-initialized')) {

        swiperDestroy(); 
    }
}

window.addEventListener('resize', resizeHandlerSlider);




console.log(clientWidth);
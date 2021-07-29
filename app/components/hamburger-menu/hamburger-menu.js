import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';


const leftMenuSwiper = new Swiper('.hamburger__left-menu', {
	/*   spaceBetween: 10, */
	   direction: 'vertical',
	 /*  centeredSlides: true, */
	  slidesPerView: 'auto',
	  /* loopedSlides: 3, */
	  /* touchRatio: 0.3, */
	 /*  slideToClickedSlide: true, */
	 loop: false,
	  
	  watchSlidesVisibility: true,
	  watchSlidesProgress: true,
	  breakpoints: {
	    320: {
	      direction: 'horizontal',
	      slidesPerView: 3,
	      spaceBetween: 10,
	    },
	  768: {
	    direction: 'vertical',
	    spaceBetween: 14,
	    
	  },
	  1280: {
	    direction: 'vertical',
	    spaceBetween: 10,
	  },
	},
	  
	});
	

	const galleryRight = new Swiper('.hamburger__right-menu', {
	  
	 /*  slidesPerView: 1, */
	  navigation: {
	    prevEl:'.item-page__gallery-btn-next',
	    nextEl: '.item-page__gallery-btn-prev',
	     
	  },
	   loop: true,
	   thumbs: {
	    swiper: leftMenuSwiper,
	  },
	

	  breakpoints: {
	    320: {
	      autoHeight: true,
	      spaceBetween: 5,
	    },
	  768: {
	    autoHeight: false,
	    spaceBetween: 10,
	  },
	},
	});



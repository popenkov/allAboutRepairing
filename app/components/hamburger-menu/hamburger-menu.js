alert(123)

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
	

	const rightMenuSwiper = new Swiper('.hamburger__right-menu', {
	  
	  slidesPerView: 1,
	  direction: 'vertical',
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



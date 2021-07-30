const leftMenuSwiper = new Swiper('.hamburger__left-menu', {
	   direction: 'vertical',
	   slidesPerView: 1,
	  slidesPerView: 'auto',
	 loop: false,
	  
	  watchSlidesVisibility: true,
	  watchSlidesProgress: true,
	  
	});
	

	const rightMenuSwiper = new Swiper('.hamburger__right-menu', {
	  
	  slidesPerView: 1,
	  direction: 'vertical',
	   loop: true,
	   thumbs: {
	    swiper: leftMenuSwiper,
	  },
	


	});



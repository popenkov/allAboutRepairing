const leftMenuSwiper = new Swiper('.hamburger__left-menu', {
	   direction: 'vertical',
	   slidesPerView: 1,
	  slidesPerView: 'auto',
	  allowTouchMove: false,
	 loop: false,
	  
	  watchSlidesVisibility: true,
	  watchSlidesProgress: true,

	  scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		hide: true,
	  },
	  
	});
	

	const rightMenuSwiper = new Swiper('.hamburger__right-menu', {
	  
	  slidesPerView: 1,
	  spaceBetween: 50,
	  direction: 'vertical',
	  allowTouchMove: false,
		loop: false,
		thumbs: {
		swiper: leftMenuSwiper,
		},



	});



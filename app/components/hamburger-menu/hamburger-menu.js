


	const catalogButton = document.querySelector('.js-hamburger-btn');
	const hamburgerMenu = document.querySelector('.js-hamburger-menu');
	
	!!catalogButton & catalogButton.addEventListener('click', () => {
		hamburgerMenu.classList.toggle('hamburger-show');


		const leftMenuSwiper = new Swiper('.hamburger__left-menu', {
			direction: 'vertical',
			slidesPerView: 1,
		   slidesPerView: 'auto',
		   allowTouchMove: false,
		  loop: false,
		  slideActiveClass: 'swiper-slide-active',
		   
		/*    watchSlidesVisibility: true,
		   watchSlidesProgress: true, */
	 
		   scrollbar: {
			 el: '.swiper-scrollbar',
			 draggable: true,
			 hide: true,
		   },


		   
		 });

		 /* отмечаю активный слайд */
		 const leftSwiperSlides = document.querySelectorAll('.hamburger__left-menu .swiper-wrapper .swiper-slide');
		 leftMenuSwiper.on('click', function (e) {
			leftSwiperSlides.forEach(item => {
				item.classList.remove('swiper-slide-active');
			})
			 let target = e.target;
			 target.classList.add('swiper-slide-active')
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
	})
	


	
	
	
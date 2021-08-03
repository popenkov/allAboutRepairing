
	const catalogButton = document.querySelector('.js-hamburger-btn');
	const hamburgerMenu = document.querySelector('.js-hamburger-menu');
	const hamburgerBackBtn = document.querySelector('.hamburger__back-btn-mobile');
	const hambergerCloseBtn = document.querySelector('.header__hamburger-btn-mobile.change');
	
	!!catalogButton & catalogButton.addEventListener('click', () => {
		console.log('click')
		hamburgerMenu.classList.toggle('hamburger-show');

	
	
	});


	
	!!hamburgerBackBtn & hamburgerBackBtn.addEventListener('click', () => {
		console.log('click')
		hamburgerMenu.classList.remove('hamburger-show');
	});

	


function tabModule (button, buttonContainer, btnContainer, tab) {

    //нужно найти кнопки, блок контента и блок c кнопками
    let tabButton = document.querySelectorAll(button),
        buttonsContainer = document.querySelector(btnContainer),
        tabContent = document.querySelectorAll(tab);

    function hideTabContent (a) {
        for (let i = a; i< tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //скрываем все табы, кроме первого
    hideTabContent(1);

    //показ определенного таба
    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //обработчик клика
    buttonsContainer.addEventListener('click', function (evt) {
        let target = evt.target;
		console.log(target, !!target.closest(button))
        if(target.closest(buttonContainer)|| target.classList.contains(buttonContainer)) {
            for (let i = 0; i<tabButton.length; i++) {
                if (target == tabButton[i]) {
					console.log(tabButton[i])
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }


    })

    }

    
    tabModule('.hamburger__left-menu-item-link', '.hamburger__left-menu-item', '.hamburger__left-menu', '.hamburger__right-menu-item');



	const headerLocationLink = document.querySelector('.header__location');
const headerLocationPopup = document.querySelector('.header__location-popup');

!!headerLocationLink && headerLocationLink.addEventListener('click', (e) => {
    e.preventDefault();
    headerLocationPopup.classList.toggle('header__location-popup--show');
})




const headerButtonMobile = document.querySelector('.header__hamburger-btn-mobile');
const menuContainer = document.querySelector('.header__navigation-container');
const main = document.querySelector('main');
const siteBody = document.querySelector('body');
 



const toogleHamburger=() => {
    headerButtonMobile.classList.toggle("change");
};

const showMenu = () => {
    menuContainer.classList.toggle('show');
    /* siteBody.classList.toggle('body__no-scroll'); */

}


!!headerButtonMobile && headerButtonMobile.addEventListener('click', (e) => {
    e.preventDefault();
    toogleHamburger();
    showMenu();

	hamburgerMenu.classList.remove('hamburger-show');

	  /*  if(menuContainer.classList.contains('show')) {
        main.style.display =  'none';
    } else {
        main.style.display =  'block';
    } */

	



})

/* 	const mobileCatalogBtn = document.querySelector('.hamburer-btn--mobile');
	!!mobileCatalogBtn & mobileCatalogBtn.addEventListener('click', () => {
		console.log('click')
		hamburgerMenu.classList.toggle('.mobile-menu--show ');
	})
 */


/* 	const leftMenuItems = document.querySelectorAll('.hamburger__left-menu-item')
	const rightMenuContainerItems = document.querySelectorAll('.hamburger__right-menu-item')

	const hideRightMenuItems = () => {
		rightMenuContainerItems.forEach(item => {
			item.style.display = 'none';
		})
	}


	leftMenuItems.forEach(item => {
		item.querySelector('a').addEventListener('mouseover', (e) => {
			hideRightMenuItems();
			let index = e.target.href;
			console.log(index)

		})
	})
	leftMenuItems[0].classList.add('select');
	rightMenuContainerItems[0].style.display = 'block';



	/*
	$('.tab-nav a').mouseover(function(){ 
	  $('.tab-panels>div').hide().filter(this.hash).show();
	  $('.tab-nav li').removeClass('select'); 
	  $(this).parent().addClass('select');
	  return (false);
	})
   */




/* 


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
		   	 
		   scrollbar: {
			 el: '.swiper-scrollbar',
			 draggable: true,
			 hide: true,
		   },


		   
		 });

		
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
	


	
	
	 */
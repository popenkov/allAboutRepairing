
	const catalogButton = document.querySelector('.js-hamburger-btn');
	const hamburgerMenu = document.querySelector('.js-hamburger-menu');
	const hamburgerBackBtn = document.querySelector('.hamburger__back-btn-mobile');
	const hambergerCloseBtn = document.querySelector('.header__hamburger-btn-mobile.change');
	
	!!catalogButton & catalogButton.addEventListener('click', () => {
		console.log('click')
		hamburgerMenu.classList.toggle('hamburger-show');
		document.querySelector('.header-wrapper').classList.toggle('body__black-bg');
		/* hamburgerMenu.classList.toggle('body__black-bg'); */
		
	
	
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
const footer = document.querySelector('footer');
const siteBody = document.querySelector('body');
 



const toogleHamburger=() => {
    headerButtonMobile.classList.toggle("change");
};

const showMenu = () => {
    menuContainer.classList.toggle('show');
    document.querySelector('.header-wrapper').classList.toggle('body__black-bg');
   /*  siteBody.classList.toggle('body__black-bg'); */
   main.classList.toggle('hide');
   footer.classList.toggle('hide');
}


!!headerButtonMobile && headerButtonMobile.addEventListener('click', (e) => {
    e.preventDefault();
    toogleHamburger();
    showMenu();

	hamburgerMenu.classList.remove('hamburger-show');

})


window.addEventListener('resize', function () {
	if (clientWidth >= MAX_MOBILE_WIDTH) {
		menuContainer.classList.remove('show');
		headerButtonMobile.classList.remove("change");
		document.querySelector('.header-wrapper').classList.remove('body__black-bg');
	}
})

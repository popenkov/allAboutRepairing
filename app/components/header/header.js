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


  /*  if(menuContainer.classList.contains('show')) {
        main.style.display =  'none';
    } else {
        main.style.display =  'block';
    } */

})




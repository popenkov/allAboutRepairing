const headerLocationLink = document.querySelector('.header__location');
const headerLocationPopup = document.querySelector('.header__location-popup');

!!headerLocationLink && headerLocationLink.addEventListener('click', (e) => {
    e.preventDefault();
    headerLocationPopup.classList.toggle('header__location-popup--show');
})




const headerButtonMobile = document.querySelector('.header__hamburger-btn-mobile');

!!headerButtonMobile && headerButtonMobile.addEventListener('click', (e) => {
    e.preventDefault();
    headerLocationPopup.classList.toggle('header__location-popup--show');
})
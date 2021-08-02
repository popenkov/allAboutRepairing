const headerLocationLink = document.querySelector('.header__location');
const headerLocationPopup = document.querySelector('.header__location-popup');

!!headerLocationLink && headerLocationLink.addEventListener('click', (e) => {
    e.preventDefault();
    headerLocationPopup.classList.toggle('header__location-popup--show');
})
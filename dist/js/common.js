"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-hamburger-btn"),t=document.querySelector(".js-hamburger-menu");e.addEventListener("click",(function(){var e;t.classList.toggle("hamburger-show");var o=new Swiper(".hamburger__left-menu",(_defineProperty(e={direction:"vertical",slidesPerView:1},"slidesPerView","auto"),_defineProperty(e,"allowTouchMove",!1),_defineProperty(e,"loop",!1),_defineProperty(e,"slideActiveClass","swiper-slide-active"),_defineProperty(e,"scrollbar",{el:".swiper-scrollbar",draggable:!0,hide:!0}),e)),r=document.querySelectorAll(".hamburger__left-menu .swiper-wrapper .swiper-slide");o.on("click",(function(e){r.forEach((function(e){e.classList.remove("swiper-slide-active")})),e.target.classList.add("swiper-slide-active")}));new Swiper(".hamburger__right-menu",{slidesPerView:1,spaceBetween:50,direction:"vertical",allowTouchMove:!1,loop:!1,thumbs:{swiper:o}})}));new Swiper(".main__slider-swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".main__slider-button-next",prevEl:".main__slider-button-prev"}}),new Swiper(".pop-works__slider-swiper",{direction:"horizontal",loop:!0,slidesPerView:3,spaceBetween:24,navigation:{nextEl:".pop-works__slider-button-next",prevEl:".pop-works__slider-button-prev"},breakpoints:{700:{slidesPerView:1,spaceBetween:0},1150:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}}),new Swiper(".new-videos__slider-swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".new-videos__slider-button-next",prevEl:".new-videos__slider-button-prev"},breakpoints:{414:{slidesPerView:1.36,spaceBetween:24},1e3:{slidesPerView:4,spaceBetween:24}}});var o,r=document.body.clientWidth,n=document.querySelector(".pop-articles__items-swiper"),i=function(){console.log("sliderInit"),o=new Swiper(".pop-articles__items-swiper",{direction:"horizontal",loop:!0,slidesPerView:1.35,spaceBetween:20}),n.classList.remove("pop-articles--no-swiper")};r<415&&i();window.addEventListener("resize",(function(){var e=document.body.clientWidth;console.log(e),e<415?i():e>=415&&n.classList.contains("swiper-container-initialized")&&(console.log("swiperDestroy"),o.destroy(!0,!0),n.classList.add("pop-articles--no-swiper"))})),console.log(r);var l=document.querySelector(".header__location"),s=document.querySelector(".header__location-popup");l&&l.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("header__location-popup--show")}));var c=document.querySelector(".header__hamburger-btn-mobile"),a=document.querySelector(".header__navigation-container");document.querySelector("main"),document.querySelector("body");c&&c.addEventListener("click",(function(e){e.preventDefault(),c.classList.toggle("change"),a.classList.toggle("show")}));var d=document.querySelectorAll(".popup-link"),p=document.querySelector("body"),u=document.querySelectorAll(".lock-padding"),w=!0;if(d.length>0)for(var v=function(e){var t=d[e];t.addEventListener("click",(function(e){var o=t.getAttribute("href").replace("#",""),r=document.getElementById(o);console.log(r),function(e){if(e&&w){var t=document.querySelector(".popup.open");t?_(t,!1):function(){var e=window.innerWidth-document.querySelector(".wrapper").clientWidth+"px";if(console.log(window.innerWidth),console.log(document.querySelector(".wrapper").offsetWidth),u.length>0)for(var t=0;t<u.length;t++){u[t].style.paddingRight=e}p.style.paddingRight=e,p.classList.add("lock"),w=!1,setTimeout((function(){w=!0}),800)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||_(e.target.closest(".popup"))}))}}(r),e.preventDefault()}))},g=0;g<d.length;g++)v(g);var m=document.querySelectorAll(".close-popup");if(m.length>0)for(var f=function(e){var t=m[e];t.addEventListener("click",(function(e){_(t.closest(".popup")),e.preventDefault()}))},h=0;h<m.length;h++)f(h);function _(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.querySelector("form")&&e.querySelector("form").reset(),w&&(e.classList.remove("open"),t&&y())}function y(){setTimeout((function(){if(u.length>0)for(var e=0;e<u.length;e++){u[e].style.paddingRight="0px"}p.style.paddingRight="0px",p.classList.remove("lock")}),800),w=!1,setTimeout((function(){w=!0}),800)}document.addEventListener("keydown",(function(e){27==e.which&&_(document.querySelector(".popup.open"))}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXRhbG9nQnV0dG9uIiwiaGFtYnVyZ2VyTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJfU3dpcGVyIiwibGVmdE1lbnVTd2lwZXIiLCJTd2lwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJlbCIsImRyYWdnYWJsZSIsInRhcmdldCIsImhpZGUiLCJzd2lwZXIiLCJvbiIsImUiLCJsZWZ0U3dpcGVyU2xpZGVzIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJhZGQiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYWxsb3dUb3VjaE1vdmUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiZGlyZWN0aW9uIiwibG9vcCIsIjcwMCIsImNsaWVudFdpZHRoIiwiMTE1MCIsInNsaWRlckluaXQiLCJsb2ciLCIxNDQwIiwic3dpcGVyQ29udGFpbmVyIiwicmVzaXplSGFuZGxlclNsaWRlciIsIjQxNCIsInN3aXBlckRlc3Ryb3kiLCJoZWFkZXJMb2NhdGlvbkxpbmsiLCJtYWluIiwiaGVhZGVyQnV0dG9uTW9iaWxlIiwiYm9keSIsIm1lbnVDb250YWluZXIiLCJ0b29nbGVIYW1idXJnZXIiLCJ0b2dnbGUiLCJzaG93TWVudSIsInRpbWVvdXQiLCJ3aW5kb3ciLCJwb3B1cExpbmtzIiwicG9wdXBMaW5rIiwicG9wdXBOYW1lIiwiY3VycmVudFBvcHVwIiwiY29udGFpbnMiLCJjb25zb2xlIiwicG9wQXJ0aWNsZXNTd2lwZXIiLCJkZXN0cm95IiwicXVlcnlTZWxlY3RvckFsbCIsInBvcHVwQ2xvc2VJY29uIiwicG9wdXBDbG9zZSIsImNsb3Nlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2tQYWRkaW5nIiwicG9wdXBBY3RpdmUiLCJsZW5ndGgiLCJfbG9vcCIsImkiLCJldnQiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bmxvY2siLCJwYWRkaW5nUmlnaHQiLCJsb2NrUGFkZGluZ1ZhbHVlIiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJzZXRUaW1lb3V0IiwiYm9keUxvY2siLCJfbG9vcDIiLCJkb1VubG9jayIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInJlc2V0IiwiYm9keVVubG9jayIsIndoaWNoIl0sIm1hcHBpbmdzIjoibUpBRUFBLFNBQVNDLGlCQUFpQixvQkFBb0IsV0FXdkNDLElBQUFBLEVBQWdCQSxTQUFjRCxjQUFkLHFCQUE4Q0UsRUFBQUgsU0FBQUksY0FBQSxzQkFDakRDLEVBQWlCSixpQkFBL0IsU0FBQSxXQUFBLElBQUFLLEVBR0FILEVBQU1JLFVBQXFCQyxPQUFPLGtCQUFYLElBQUFELEVBQUEsSUFBQUMsT0FBQSx5QkFBQUMsZ0JBQUFILEVBQUEsQ0FZckJJLFVBQUksV0FDSkMsY0FGWSxHQVhTLGdCQWNmLFFBZGVGLGdCQUFBSCxFQUFBLGtCQUF2QixHQUF1QkcsZ0JBQUFILEVBQUEsUUFxQnRCLEdBckJzQkcsZ0JBQUFILEVBQUEsbUJBTUgsdUJBTkdHLGdCQUFBSCxFQUFBLFlBd0J0QixDQUdDSSxHQUFJRSxvQkFDSkEsV0FBT1AsRUFMUlEsTUFBQSxJQXZCc0JQLElBOENyQlEsRUFBUVAsU0FBQUEsaUJBQUFBLHVEQURBQSxFQUFBUSxHQUFBLFNBQUEsU0FBQUMsR0FQVEMsRUFBQUMsU0FBQSxTQUFBQyxHQTFDRkEsRUFBQWQsVUFBQWUsT0FBQSwwQkEwREdKLEVBQUFKLE9BQ1dQLFVBQUFnQixJQUY2QywwQkFhRyxJQUFBYixPQUFBLHlCQUFBLENBSzNEYyxjQUFBLEVBQ0FBLGFBTjJELEdBTzNEQyxVQVAyRCxXQVczREMsZ0JBQUEsRUFDQUMsTUFBVSxFQUNSQyxPQUFRLENBQ1JDLE9BQVFwQixRQUdHLElBQUFDLE9BQUEsdUJBQUEsQ0FPWG9CLFVBQU0sYUFDSk4sTUFBQUEsRUFNQUEsV0FBQUEsQ0FDQUMsT0FBQUEsNEJBRklJLE9BQUEsK0JB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QUFPLFVBaERSLEtBbURsQm9ELEdBQVMsRUFDVE0sWUFBVyxXQUNQTixHQUFTLElBckRLLEtBeUR0QnhFLFNBQVNDLGlCQUFpQixXQUFXLFNBQVVtRSxHQUMxQixJQUFiQSxFQUFJa0IsT0FFSjFCLEVBRG9CNUQsU0FBU0ksY0FBYyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLz09PT09PT18ICAgSU1QT1JUU1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcdGNvbnN0IGNhdGFsb2dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGFtYnVyZ2VyLWJ0bicpO1xyXG4gICAgXHRjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhhbWJ1cmdlci1tZW51Jyk7XHJcbiAgICBcdFxyXG4gICAgXHQhIWNhdGFsb2dCdXR0b24gJiBjYXRhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgXHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLXNob3cnKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcdFx0Y29uc3QgbGVmdE1lbnVTd2lwZXIgPSBuZXcgU3dpcGVyKCcuaGFtYnVyZ2VyX19sZWZ0LW1lbnUnLCB7XHJcbiAgICBcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICBcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgXHRcdCAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgIFx0XHQgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICBcdFx0ICBsb29wOiBmYWxzZSxcclxuICAgIFx0XHQgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcclxuICAgIFx0XHQgICBcclxuICAgIFx0XHQvKiAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcbiAgICBcdFx0ICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSwgKi9cclxuICAgIFx0IFxyXG4gICAgXHRcdCAgIHNjcm9sbGJhcjoge1xyXG4gICAgXHRcdFx0IGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgXHRcdFx0IGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIFx0XHRcdCBoaWRlOiB0cnVlLFxyXG4gICAgXHRcdCAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHRcdCAgIFxyXG4gICAgXHRcdCB9KTtcclxuICAgIFxyXG4gICAgXHRcdCAvKiDQvtGC0LzQtdGH0LDRjiDQsNC60YLQuNCy0L3Ri9C5INGB0LvQsNC50LQgKi9cclxuICAgIFx0XHQgY29uc3QgbGVmdFN3aXBlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXJfX2xlZnQtbWVudSAuc3dpcGVyLXdyYXBwZXIgLnN3aXBlci1zbGlkZScpO1xyXG4gICAgXHRcdCBsZWZ0TWVudVN3aXBlci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHRcdFx0bGVmdFN3aXBlclNsaWRlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1zbGlkZS1hY3RpdmUnKTtcclxuICAgIFx0XHRcdH0pXHJcbiAgICBcdFx0XHQgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgXHRcdFx0IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzd2lwZXItc2xpZGUtYWN0aXZlJylcclxuICAgIFx0XHQgIH0pO1xyXG4gICAgXHJcbiAgICBcdFx0ICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHRcdCBcclxuICAgIFx0IFxyXG4gICAgXHRcdCBjb25zdCByaWdodE1lbnVTd2lwZXIgPSBuZXcgU3dpcGVyKCcuaGFtYnVyZ2VyX19yaWdodC1tZW51Jywge1xyXG4gICAgXHRcdCAgIFxyXG4gICAgXHRcdCAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBcdFx0ICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgIFx0XHQgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICBcdFx0ICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgXHRcdFx0IGxvb3A6IGZhbHNlLFxyXG4gICAgXHRcdFx0IHRodW1iczoge1xyXG4gICAgXHRcdFx0IHN3aXBlcjogbGVmdE1lbnVTd2lwZXIsXHJcbiAgICBcdFx0XHQgfSxcclxuICAgIFx0IFxyXG4gICAgXHQgXHJcbiAgICBcdCBcclxuICAgIFx0XHQgfSk7XHJcbiAgICBcdH0pXHJcbiAgICBjb25zdCBtYWluU2xpZGVyc3dpcGVyID0gbmV3IFN3aXBlcignLm1haW5fX3NsaWRlci1zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBuZXh0RWw6ICcubWFpbl9fc2xpZGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5tYWluX19zbGlkZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIGNvbnN0IHBvcFdvcmtzU3dpcGVyID0gbmV3IFN3aXBlcignLnBvcC13b3Jrc19fc2xpZGVyLXN3aXBlcicsIHtcclxuICAgICAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgIFxyXG4gICAgICAgIC8vIERlZmF1bHQgcGFyYW1ldGVyc1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLnBvcC13b3Jrc19fc2xpZGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5wb3Atd29ya3NfX3NsaWRlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0MTR4XHJcbiAgICAgICAgICA3MDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XHJcbiAgICAgICAgICAxMTUwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgIDE0NDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgY29uc3QgbmV3VmlkZW9zU3dpcGVyID0gbmV3IFN3aXBlcignLm5ldy12aWRlb3NfX3NsaWRlci1zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBuZXh0RWw6ICcubmV3LXZpZGVvc19fc2xpZGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5uZXctdmlkZW9zX19zbGlkZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0MTRcclxuICAgICAgICAgIDQxNDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjM2LFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAwMFxyXG4gICAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI0XHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfSk7XHJcbiAgICBsZXQgeyBjbGllbnRXaWR0aCB9ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtYXJ0aWNsZXNfX2l0ZW1zLXN3aXBlcicpO1xyXG4gICAgbGV0IHBvcEFydGljbGVzU3dpcGVyO1xyXG4gICAgXHJcbiAgICBjb25zdCBzbGlkZXJJbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzbGlkZXJJbml0JylcclxuICAgICAgICBwb3BBcnRpY2xlc1N3aXBlciAgPSBuZXcgU3dpcGVyKCcucG9wLWFydGljbGVzX19pdGVtcy1zd2lwZXInLCB7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMzUsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgIHN3aXBlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtYXJ0aWNsZXMtLW5vLXN3aXBlcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzd2lwZXJEZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZXJEZXN0cm95JylcclxuICAgICAgICBwb3BBcnRpY2xlc1N3aXBlci5kZXN0cm95KHRydWUsIHRydWUpXHJcbiAgICAgICAgc3dpcGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC1hcnRpY2xlcy0tbm8tc3dpcGVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKGNsaWVudFdpZHRoPCA0MTUpIHtcclxuICAgICAgICBzbGlkZXJJbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXJTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHsgY2xpZW50V2lkdGggfSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50V2lkdGgpO1xyXG4gICAgICAgIGlmIChjbGllbnRXaWR0aDwgNDE1KSB7XHJcbiAgICAgICAgICAgIHNsaWRlckluaXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWVudFdpZHRoID49IDQxNSAmJiBzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJykpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBzd2lwZXJEZXN0cm95KCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXJTbGlkZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhjbGllbnRXaWR0aCk7XHJcbiAgICBjb25zdCBoZWFkZXJMb2NhdGlvbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2NhdGlvbicpO1xyXG4gICAgY29uc3QgaGVhZGVyTG9jYXRpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvY2F0aW9uLXBvcHVwJyk7XHJcbiAgICBcclxuICAgICEhaGVhZGVyTG9jYXRpb25MaW5rICYmIGhlYWRlckxvY2F0aW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhlYWRlckxvY2F0aW9uUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19sb2NhdGlvbi1wb3B1cC0tc2hvdycpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyQnV0dG9uTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faGFtYnVyZ2VyLWJ0bi1tb2JpbGUnKTtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIGNvbnN0IHNpdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgdG9vZ2xlSGFtYnVyZ2VyPSgpID0+IHtcclxuICAgICAgICBoZWFkZXJCdXR0b25Nb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIC8qIHNpdGVCb2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHlfX25vLXNjcm9sbCcpOyAqL1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgISFoZWFkZXJCdXR0b25Nb2JpbGUgJiYgaGVhZGVyQnV0dG9uTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9vZ2xlSGFtYnVyZ2VyKCk7XHJcbiAgICAgICAgc2hvd01lbnUoKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgIC8qICBpZihtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZGlzcGxheSA9ICAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gICdibG9jayc7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBwb3B1cExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cC1saW5rXCIpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICBjb25zdCBsb2NrUGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9jay1wYWRkaW5nXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1bmxvY2sgPSB0cnVlOyAvL9GH0YLQvtCx0Ysg0L3QtSDQsdGL0LvQviDQtNCy0L7QudC90YvRhSDQvdCw0LbQsNGC0LjQuVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSA4MDA7IC8vINCi0LDQudC80LDRg9GCINGB0YLQvtC40YIg0YLQsNC60L7QuSDQttC1INC60LDQuiDRgyDQsNC90LjQvNCw0YbQuNC4INCyINGB0LjRjdGB0Y3RgS4g0K3RgtC+INGB0LLRj9C30LDQvdC+INGBINCx0LvQvtC60LjRgNC+0LLQutC+0Lkg0YHRgtGA0L7QuNC70LAg0Lgg0LXQs9C+INCw0LTQtdC60LLQsNGC0L3QvtC5INGA0LDQsdC+0YLQtVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwb3B1cExpbmtzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cExpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cExpbmsgPSBwb3B1cExpbmtzW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBOYW1lID0gcG9wdXBMaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9wdXBOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UG9wdXApXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBPcGVuKGN1cnJlbnRQb3B1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBvcHVwQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1wb3B1cFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocG9wdXBDbG9zZUljb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwQ2xvc2VJY29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHBvcHVwQ2xvc2VJY29uW2ldO1xyXG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cENsb3NlKGVsLmNsb3Nlc3QoXCIucG9wdXBcIikpOyAvLyDQmtC70L7Qt9C10YHRgiAtINGN0YLQviDQsdC70LjQttCw0LnRiNC40Lkg0YDQvtC00LjRgtC10LvRjCDRgdGB0YvQu9C60Lgg0YEg0LrQu9Cw0YHRgdC+0Lwg0L/QvtC/0LDQvy4g0KLQviDQtdGB0YLRjCDQsdGD0LTQtdGCINC30LDQutGA0YvRgiDQv9C+0L/QsNC/INGA0Y/QtNC+0Lwg0YEg0LrQu9C40LrQvdGD0YLQvtC5INGB0YHRi9C70LrQvtC5LCDQsCDQvdC1INC60LDQutC+0YbRgtC+INC00YDRg9Cz0L7QuS4g0J7RgiDRgdGB0YvQu9C60Lgg0YHQvtCx0YvRgtC40LUg0LLRgdC/0LvRi9Cy0ZHRgiDQuCDRgdGA0LDQsdC+0YLQsNC10YIg0L3QsCDRgNC+0LTQuNGC0LXQu9C1INGBINC60LvQsNGB0YHQvtC8INC/0L7Qv9Cw0L9cclxuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/RhNGD0L3QutGG0LjRjyDQvtGC0LrRgNGL0YLQuNGPXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gcG9wdXBPcGVuKGN1cnJlbnRQb3B1cCkge1xyXG4gICAgICAgICAgICAvL9CS0L3QsNGH0LDQu9C1INC/0YDQvtCy0LXRgNC60LAg0L3QsCDRg9C20LUg0L7RgtC60YDRi9GC0YvQtSDQv9C+0L/QsNC/0YssINGH0YLQvtCx0Ysg0LfQsNC60YDRi9GC0Ywg0LjRhVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBvcHVwICYmIHVubG9jaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9wdXBBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cENsb3NlKHBvcHVwQWN0aXZlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlMb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9wdXAuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL9C30LDQutGA0YvRgtC40LUg0L/QviDQutC70LjQutGDINCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQutC+0L3RgtC10L3RgtCwXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2dC50YXJnZXQuY2xvc2VzdChcIi5wb3B1cF9fY29udGVudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cENsb3NlKGV2dC50YXJnZXQuY2xvc2VzdChcIi5wb3B1cFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/QpNCj0J3QmtCm0JjQryDQl9CQ0JrQoNCr0KLQmNCvXHJcbiAgICAgICAgLy/QkiDQt9Cw0LrRgNGL0YLQuNC4INC80Ysg0LzQvtC20LXQvCDQv9C10YDQtdC00LDRgtGMINGE0L7Qu9GBINC00LvRjyDQsdC70L7QutC40YDQvtCy0LrQuCDQsdC+0LTQuCwg0LrQvtCz0LTQsCDQvNGLINC+0YLQutGA0YvQstCw0LXQvCDQv9C+0L/QsNC/INCyINC/0L7Qv9Cw0L/QtVxyXG4gICAgICAgIGZ1bmN0aW9uIHBvcHVwQ2xvc2UocG9wdXBBY3RpdmUsIGRvVW5sb2NrID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAocG9wdXBBY3RpdmUucXVlcnlTZWxlY3RvcignZm9ybScpKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cEFjdGl2ZS5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBwb3B1cEFjdGl2ZS5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTsgKi9cclxuICAgICAgICAgICAgaWYgKHVubG9jaykge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9VbmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5VW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYm9keUxvY2soKSB7XHJcbiAgICAgICAgICAgIC8v0JLQvdCw0YfQsNC70LUg0YPQsdC40YDQsNC10YIg0L/RgNGL0LPQsNGO0YnQuNC5INGB0LrRgNC+0LvQuyB3cmFwcGVyIOKAkyDRjdGC0L4g0LTQuNCyINCy0L3Rg9GC0YDQuCDQsdC+0LTQuFxyXG4gICAgICAgICAgICAvKiBjb25zdCBsb2NrUGFkZGluZ1ZhbHVlID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikub2Zmc2V0V2lkdGggKyBcInB4XCI7ICovXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2tQYWRkaW5nVmFsdWUgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGllbnRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvL9Cb0L7QuiDQv9GN0LTQtNC40L3QsyDQtNC+0LHQsNCy0LvRj9C10YIg0L7QsdGK0LXQutGC0LDQvCDRgSDQv9C+0LfQuNGI0L0g0YTQuNC60YHQtC4g0J3QsNC/0YDQuNC80LXRgCDRhdGN0LTRjdGAINGC0LDQutC+0LkuINCe0L0g0YHQstC40LTQs9Cw0LXRgtGB0Y8uINCV0LzRgyDQvdCw0LTQviDRgdGC0LjQu9GMINC/0L7QtNC/0YDQsNCy0LjRgtGMLlxyXG4gICAgICAgICAgICBpZiAobG9ja1BhZGRpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NrUGFkZGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gbG9ja1BhZGRpbmdbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gbG9ja1BhZGRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGxvY2tQYWRkaW5nVmFsdWU7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8v0J7QvSDQu9C+0YfQuNGCINC90LAg0LLRgNC10LzRjyDRgtCw0LnQvNCw0YPRgtCwLCDQv9C+0YLQvtC80YMg0YfRgtC+INC+0LrQvdC+INC30LDQutGA0YvQstCw0LXRgtGB0Y8gODAwINC80YEuINCYINGH0YLQvtCx0Ysg0LLQviDQstGA0LXQvNGPINC30LDQutGA0YvRgtC40Y8g0L3QtSDQvtGC0LrRgNGL0YLRjCDQsdGL0LvQviDQvtC60L3QviDRgdC90L7QstCwXHJcbiAgICAgICAgICAgIHVubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHVubG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL9C90LUg0LTQviDQutC+0L3RhtCwXHJcbiAgICAgICAgZnVuY3Rpb24gYm9keVVubG9jaygpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9ja1BhZGRpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9ja1BhZGRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBsb2NrUGFkZGluZ1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHVubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHVubG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChldnQud2hpY2ggPT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZShwb3B1cEFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG5cclxufSk7Il19

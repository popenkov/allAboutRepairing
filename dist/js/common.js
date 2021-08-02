"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-hamburger-btn"),t=document.querySelector(".js-hamburger-menu");e.addEventListener("click",(function(){var e;t.classList.toggle("hamburger-show");var o=new Swiper(".hamburger__left-menu",(_defineProperty(e={direction:"vertical",slidesPerView:1},"slidesPerView","auto"),_defineProperty(e,"allowTouchMove",!1),_defineProperty(e,"loop",!1),_defineProperty(e,"slideActiveClass","swiper-slide-active"),_defineProperty(e,"scrollbar",{el:".swiper-scrollbar",draggable:!0,hide:!0}),e)),r=document.querySelectorAll(".hamburger__left-menu .swiper-wrapper .swiper-slide");o.on("click",(function(e){r.forEach((function(e){e.classList.remove("swiper-slide-active")})),e.target.classList.add("swiper-slide-active")}));new Swiper(".hamburger__right-menu",{slidesPerView:1,spaceBetween:50,direction:"vertical",allowTouchMove:!1,loop:!1,thumbs:{swiper:o}})}));new Swiper(".main__slider-swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".main__slider-button-next",prevEl:".main__slider-button-prev"}}),new Swiper(".pop-works__slider-swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".pop-works__slider-button-next",prevEl:".pop-works__slider-button-prev"},breakpoints:{414:{slidesPerView:1,spaceBetween:0},1e3:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}}),new Swiper(".new-videos__slider-swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".new-videos__slider-button-next",prevEl:".new-videos__slider-button-prev"},breakpoints:{414:{slidesPerView:1.36,spaceBetween:24},1e3:{slidesPerView:4,spaceBetween:24}}});var o,r=document.body.clientWidth,i=document.querySelector(".pop-articles__items-swiper"),n=function(){console.log("sliderInit"),o=new Swiper(".pop-articles__items-swiper",{direction:"horizontal",loop:!0}),i.classList.remove("pop-articles--no-swiper")};r<415&&n();window.addEventListener("resize",(function(){var e=document.body.clientWidth;console.log(e),e<415?n():e>=415&&i.classList.contains("swiper-container-initialized")&&(console.log("swiperDestroy"),o.destroy(!0,!0),i.classList.add("pop-articles--no-swiper"))})),console.log(r);var l=document.querySelector(".header__location"),s=document.querySelector(".header__location-popup");l&&l.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("header__location-popup--show")}));var c=document.querySelector(".header__hamburger-btn-mobile");c&&c.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("header__location-popup--show")}));var a=document.querySelectorAll(".popup-link"),d=document.querySelector("body"),p=document.querySelectorAll(".lock-padding"),u=!0;if(a.length>0)for(var w=function(e){var t=a[e];t.addEventListener("click",(function(e){var o=t.getAttribute("href").replace("#",""),r=document.getElementById(o);console.log(r),function(e){if(e&&u){var t=document.querySelector(".popup.open");t?h(t,!1):function(){var e=window.innerWidth-document.querySelector(".wrapper").clientWidth+"px";if(console.log(window.innerWidth),console.log(document.querySelector(".wrapper").offsetWidth),p.length>0)for(var t=0;t<p.length;t++){p[t].style.paddingRight=e}d.style.paddingRight=e,d.classList.add("lock"),u=!1,setTimeout((function(){u=!0}),800)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||h(e.target.closest(".popup"))}))}}(r),e.preventDefault()}))},v=0;v<a.length;v++)w(v);var f=document.querySelectorAll(".close-popup");if(f.length>0)for(var g=function(e){var t=f[e];t.addEventListener("click",(function(e){h(t.closest(".popup")),e.preventDefault()}))},m=0;m<f.length;m++)g(m);function h(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.querySelector("form")&&e.querySelector("form").reset(),u&&(e.classList.remove("open"),t&&_())}function _(){setTimeout((function(){if(p.length>0)for(var e=0;e<p.length;e++){p[e].style.paddingRight="0px"}d.style.paddingRight="0px",d.classList.remove("lock")}),800),u=!1,setTimeout((function(){u=!0}),800)}document.addEventListener("keydown",(function(e){27==e.which&&h(document.querySelector(".popup.open"))}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXRhbG9nQnV0dG9uIiwiaGFtYnVyZ2VyTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJfU3dpcGVyIiwibGVmdE1lbnVTd2lwZXIiLCJTd2lwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJlbCIsImRyYWdnYWJsZSIsInRhcmdldCIsImhpZGUiLCJzd2lwZXIiLCJvbiIsImUiLCJsZWZ0U3dpcGVyU2xpZGVzIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJhZGQiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImxvb3AiLCJicmVha3BvaW50cyIsImRpcmVjdGlvbiIsIm5ld1ZpZGVvc1N3aXBlciIsInNwYWNlQmV0d2VlbiIsIjQxNCIsInBvcEFydGljbGVzU3dpcGVyIiwic2xpZGVySW5pdCIsImRlc3Ryb3kiLCJyZXNpemVIYW5kbGVyU2xpZGVyIiwiY2xpZW50V2lkdGgiLCJzd2lwZXJEZXN0cm95IiwibG9nIiwiYm9keSIsInN3aXBlckNvbnRhaW5lciIsImNvbnNvbGUiLCJoZWFkZXJMb2NhdGlvbkxpbmsiLCJoZWFkZXJMb2NhdGlvblBvcHVwIiwiaGVhZGVyQnV0dG9uTW9iaWxlIiwicG9wdXBMaW5rcyIsIndpbmRvdyIsInBvcHVwTmFtZSIsInBvcHVwTGluayIsImdldEF0dHJpYnV0ZSIsImN1cnJlbnRQb3B1cCIsInBvcHVwT3BlbiIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbnMiLCJsb2NrUGFkZGluZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cENsb3NlSWNvbiIsInRvZ2dsZSIsInBvcHVwQ2xvc2UiLCJjbG9zZXN0IiwiZG9VbmxvY2siLCJsZW5ndGgiLCJfbG9vcCIsImkiLCJldnQiLCJyZXBsYWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bmxvY2siLCJwb3B1cEFjdGl2ZSIsImxvY2tQYWRkaW5nVmFsdWUiLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsInNldFRpbWVvdXQiLCJib2R5TG9jayIsImJvZHlVbmxvY2siLCJfbG9vcDIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyZXNldCIsIndoaWNoIl0sIm1hcHBpbmdzIjoibUpBRUFBLFNBQVNDLGlCQUFpQixvQkFBb0IsV0FXdkNDLElBQUFBLEVBQWdCQSxTQUFjRCxjQUFkLHFCQUE4Q0UsRUFBQUgsU0FBQUksY0FBQSxzQkFDakRDLEVBQWlCSixpQkFBL0IsU0FBQSxXQUFBLElBQUFLLEVBR0FILEVBQU1JLFVBQXFCQyxPQUFPLGtCQUFYLElBQUFELEVBQUEsSUFBQUMsT0FBQSx5QkFBQUMsZ0JBQUFILEVBQUEsQ0FZckJJLFVBQUksV0FDSkMsY0FGWSxHQVhTLGdCQWNmLFFBZGVGLGdCQUFBSCxFQUFBLGtCQUF2QixHQUF1QkcsZ0JBQUFILEVBQUEsUUFxQnRCLEdBckJzQkcsZ0JBQUFILEVBQUEsbUJBTUgsdUJBTkdHLGdCQUFBSCxFQUFBLFlBd0J0QixDQUdDSSxHQUFJRSxvQkFDSkEsV0FBT1AsRUFMUlEsTUFBQSxJQXZCc0JQLElBOENyQlEsRUFBUVAsU0FBQUEsaUJBQUFBLHVEQURBQSxFQUFBUSxHQUFBLFNBQUEsU0FBQUMsR0FQVEMsRUFBQUMsU0FBQSxTQUFBQyxHQTFDRkEsRUFBQWQsVUFBQWUsT0FBQSwwQkEwREdKLEVBQUFKLE9BQ1dQLFVBQUFnQixJQUY2QywwQkFhRyxJQUFBYixPQUFBLHlCQUFBLENBTzNEYyxjQUFBLEVBQ0FDLGFBQVksR0FDVkMsVUFBUSxXQUNSQyxnQkFBUSxFQVZpREMsTUFBQSxFQWEzREMsT0FBVyxDQUNUYixPQUFBUCxRQU1NLElBQUFDLE9BQUEsdUJBQUEsQ0FQS29CLFVBQUEsYUFhWEYsTUFBTSxFQWJLSCxXQUFBLENBYmpCQyxPQUFBLDRCQWtDTUssT0FBQUEsK0JBTUYsSUFBQXJCLE9BQUEsNEJBQUEsQ0FFRWdCLFVBQVEsYUFD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bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy89PT09PT09fCAgIElNUE9SVFNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHRjb25zdCBjYXRhbG9nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhhbWJ1cmdlci1idG4nKTtcclxuICAgIFx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oYW1idXJnZXItbWVudScpO1xyXG4gICAgXHRcclxuICAgIFx0ISFjYXRhbG9nQnV0dG9uICYgY2F0YWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlci1zaG93Jyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHRcdGNvbnN0IGxlZnRNZW51U3dpcGVyID0gbmV3IFN3aXBlcignLmhhbWJ1cmdlcl9fbGVmdC1tZW51Jywge1xyXG4gICAgXHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuICAgIFx0XHQgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBcdFx0ICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgXHRcdCAgbG9vcDogZmFsc2UsXHJcbiAgICBcdFx0ICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXHJcbiAgICBcdFx0ICAgXHJcbiAgICBcdFx0LyogICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgXHRcdCAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsICovXHJcbiAgICBcdCBcclxuICAgIFx0XHQgICBzY3JvbGxiYXI6IHtcclxuICAgIFx0XHRcdCBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgIFx0XHRcdCBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBcdFx0XHQgaGlkZTogdHJ1ZSxcclxuICAgIFx0XHQgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIFx0XHQgICBcclxuICAgIFx0XHQgfSk7XHJcbiAgICBcclxuICAgIFx0XHQgLyog0L7RgtC80LXRh9Cw0Y4g0LDQutGC0LjQstC90YvQuSDRgdC70LDQudC0ICovXHJcbiAgICBcdFx0IGNvbnN0IGxlZnRTd2lwZXJTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFtYnVyZ2VyX19sZWZ0LW1lbnUgLnN3aXBlci13cmFwcGVyIC5zd2lwZXItc2xpZGUnKTtcclxuICAgIFx0XHQgbGVmdE1lbnVTd2lwZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFx0XHRcdGxlZnRTd2lwZXJTbGlkZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItc2xpZGUtYWN0aXZlJyk7XHJcbiAgICBcdFx0XHR9KVxyXG4gICAgXHRcdFx0IGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIFx0XHRcdCB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlLWFjdGl2ZScpXHJcbiAgICBcdFx0ICB9KTtcclxuICAgIFxyXG4gICAgXHRcdCAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFx0XHQgXHJcbiAgICBcdCBcclxuICAgIFx0XHQgY29uc3QgcmlnaHRNZW51U3dpcGVyID0gbmV3IFN3aXBlcignLmhhbWJ1cmdlcl9fcmlnaHQtbWVudScsIHtcclxuICAgIFx0XHQgICBcclxuICAgIFx0XHQgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgXHRcdCAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICBcdFx0ICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgXHRcdCAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIFx0XHRcdCBsb29wOiBmYWxzZSxcclxuICAgIFx0XHRcdCB0aHVtYnM6IHtcclxuICAgIFx0XHRcdCBzd2lwZXI6IGxlZnRNZW51U3dpcGVyLFxyXG4gICAgXHRcdFx0IH0sXHJcbiAgICBcdCBcclxuICAgIFx0IFxyXG4gICAgXHQgXHJcbiAgICBcdFx0IH0pO1xyXG4gICAgXHR9KVxyXG4gICAgY29uc3QgbWFpblNsaWRlcnN3aXBlciA9IG5ldyBTd2lwZXIoJy5tYWluX19zbGlkZXItc3dpcGVyJywge1xyXG4gICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLm1haW5fX3NsaWRlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcubWFpbl9fc2xpZGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgfSk7XHJcbiAgICBjb25zdCBwb3BXb3Jrc1N3aXBlciA9IG5ldyBTd2lwZXIoJy5wb3Atd29ya3NfX3NsaWRlci1zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIG5leHRFbDogJy5wb3Atd29ya3NfX3NsaWRlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcucG9wLXdvcmtzX19zbGlkZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcclxuICAgICAgICAgIDQxNDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI0XHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgIDE0NDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNFxyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfSk7XHJcbiAgICBjb25zdCBuZXdWaWRlb3NTd2lwZXIgPSBuZXcgU3dpcGVyKCcubmV3LXZpZGVvc19fc2xpZGVyLXN3aXBlcicsIHtcclxuICAgICAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIG5leHRFbDogJy5uZXctdmlkZW9zX19zbGlkZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgcHJldkVsOiAnLm5ldy12aWRlb3NfX3NsaWRlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQxNFxyXG4gICAgICAgICAgNDE0OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMzYsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDAwXHJcbiAgICAgICAgICAxMDAwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjRcclxuICAgICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBsZXQgeyBjbGllbnRXaWR0aCB9ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtYXJ0aWNsZXNfX2l0ZW1zLXN3aXBlcicpO1xyXG4gICAgbGV0IHBvcEFydGljbGVzU3dpcGVyO1xyXG4gICAgY29uc3Qgc2xpZGVySW5pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2xpZGVySW5pdCcpXHJcbiAgICAgICBwb3BBcnRpY2xlc1N3aXBlciAgPSBuZXcgU3dpcGVyKCcucG9wLWFydGljbGVzX19pdGVtcy1zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncG9wLWFydGljbGVzLS1uby1zd2lwZXInKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc3dpcGVyRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGVyRGVzdHJveScpXHJcbiAgICAgICAgcG9wQXJ0aWNsZXNTd2lwZXIuZGVzdHJveSh0cnVlLCB0cnVlKVxyXG4gICAgICAgIHN3aXBlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3AtYXJ0aWNsZXMtLW5vLXN3aXBlcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGlmIChjbGllbnRXaWR0aDwgNDE1KSB7XHJcbiAgICAgICAgc2xpZGVySW5pdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNpemVIYW5kbGVyU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IGNsaWVudFdpZHRoIH0gPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWVudFdpZHRoKTtcclxuICAgICAgICBpZiAoY2xpZW50V2lkdGg8IDQxNSkge1xyXG4gICAgICAgICAgICBzbGlkZXJJbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGllbnRXaWR0aCA+PSA0MTUgJiYgc3dpcGVyQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc3dpcGVyRGVzdHJveSgpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyU2xpZGVyKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coY2xpZW50V2lkdGgpXHJcbiAgICAvKiBsZXQgeW91clNsaWRlcjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXJTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsaWVudFdpZHRoICE9PSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIGNsaWVudFdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoeW91clNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgeW91clNsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBzbGlkZXJJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG4gICAgY29uc3QgaGVhZGVyTG9jYXRpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9jYXRpb24nKTtcclxuICAgIGNvbnN0IGhlYWRlckxvY2F0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2NhdGlvbi1wb3B1cCcpO1xyXG4gICAgXHJcbiAgICAhIWhlYWRlckxvY2F0aW9uTGluayAmJiBoZWFkZXJMb2NhdGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJMb2NhdGlvblBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbG9jYXRpb24tcG9wdXAtLXNob3cnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlckJ1dHRvbk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2hhbWJ1cmdlci1idG4tbW9iaWxlJyk7XHJcbiAgICBcclxuICAgICEhaGVhZGVyQnV0dG9uTW9iaWxlICYmIGhlYWRlckJ1dHRvbk1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhlYWRlckxvY2F0aW9uUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19sb2NhdGlvbi1wb3B1cC0tc2hvdycpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcG9wdXBMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXAtbGlua1wiKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgbG9ja1BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvY2stcGFkZGluZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdW5sb2NrID0gdHJ1ZTsgLy/Rh9GC0L7QsdGLINC90LUg0LHRi9C70L4g0LTQstC+0LnQvdGL0YUg0L3QsNC20LDRgtC40LlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gODAwOyAvLyDQotCw0LnQvNCw0YPRgiDRgdGC0L7QuNGCINGC0LDQutC+0Lkg0LbQtSDQutCw0Log0YMg0LDQvdC40LzQsNGG0LjQuCDQsiDRgdC40Y3RgdGN0YEuINCt0YLQviDRgdCy0Y/Qt9Cw0L3QviDRgSDQsdC70L7QutC40YDQvtCy0LrQvtC5INGB0YLRgNC+0LjQu9CwINC4INC10LPQviDQsNC00LXQutCy0LDRgtC90L7QuSDRgNCw0LHQvtGC0LVcclxuICAgICAgICBcclxuICAgICAgICBpZiAocG9wdXBMaW5rcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBMaW5rID0gcG9wdXBMaW5rc1tpXTtcclxuICAgICAgICAgICAgICAgIHBvcHVwTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwTmFtZSA9IHBvcHVwTGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcHVwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFBvcHVwKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwT3BlbihjdXJyZW50UG9wdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwb3B1cENsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvc2UtcG9wdXBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBvcHVwQ2xvc2VJY29uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cENsb3NlSWNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBwb3B1cENsb3NlSWNvbltpXTtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBDbG9zZShlbC5jbG9zZXN0KFwiLnBvcHVwXCIpKTsgLy8g0JrQu9C+0LfQtdGB0YIgLSDRjdGC0L4g0LHQu9C40LbQsNC50YjQuNC5INGA0L7QtNC40YLQtdC70Ywg0YHRgdGL0LvQutC4INGBINC60LvQsNGB0YHQvtC8INC/0L7Qv9Cw0L8uINCi0L4g0LXRgdGC0Ywg0LHRg9C00LXRgiDQt9Cw0LrRgNGL0YIg0L/QvtC/0LDQvyDRgNGP0LTQvtC8INGBINC60LvQuNC60L3Rg9GC0L7QuSDRgdGB0YvQu9C60L7QuSwg0LAg0L3QtSDQutCw0LrQvtGG0YLQviDQtNGA0YPQs9C+0LkuINCe0YIg0YHRgdGL0LvQutC4INGB0L7QsdGL0YLQuNC1INCy0YHQv9C70YvQstGR0YIg0Lgg0YHRgNCw0LHQvtGC0LDQtdGCINC90LAg0YDQvtC00LjRgtC10LvQtSDRgSDQutC70LDRgdGB0L7QvCDQv9C+0L/QsNC/XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v0YTRg9C90LrRhtC40Y8g0L7RgtC60YDRi9GC0LjRj1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHBvcHVwT3BlbihjdXJyZW50UG9wdXApIHtcclxuICAgICAgICAgICAgLy/QktC90LDRh9Cw0LvQtSDQv9GA0L7QstC10YDQutCwINC90LAg0YPQttC1INC+0YLQutGA0YvRgtGL0LUg0L/QvtC/0LDQv9GLLCDRh9GC0L7QsdGLINC30LDQutGA0YvRgtGMINC40YVcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3B1cCAmJiB1bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBDbG9zZShwb3B1cEFjdGl2ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5TG9jaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy/Qt9Cw0LrRgNGL0YLQuNC1INC/0L4g0LrQu9C40LrRgyDQstC90LUg0L7QsdC70LDRgdGC0Lgg0LrQvtC90YLQtdC90YLQsFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldnQudGFyZ2V0LmNsb3Nlc3QoXCIucG9wdXBfX2NvbnRlbnRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBDbG9zZShldnQudGFyZ2V0LmNsb3Nlc3QoXCIucG9wdXBcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v0KTQo9Cd0JrQptCY0K8g0JfQkNCa0KDQq9Ci0JjQr1xyXG4gICAgICAgIC8v0JIg0LfQsNC60YDRi9GC0LjQuCDQvNGLINC80L7QttC10Lwg0L/QtdGA0LXQtNCw0YLRjCDRhNC+0LvRgSDQtNC70Y8g0LHQu9C+0LrQuNGA0L7QstC60Lgg0LHQvtC00LgsINC60L7Qs9C00LAg0LzRiyDQvtGC0LrRgNGL0LLQsNC10Lwg0L/QvtC/0LDQvyDQsiDQv9C+0L/QsNC/0LVcclxuICAgICAgICBmdW5jdGlvbiBwb3B1cENsb3NlKHBvcHVwQWN0aXZlLCBkb1VubG9jayA9IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHBvcHVwQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBY3RpdmUucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogcG9wdXBBY3RpdmUucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7ICovXHJcbiAgICAgICAgICAgIGlmICh1bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvVW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGJvZHlMb2NrKCkge1xyXG4gICAgICAgICAgICAvL9CS0L3QsNGH0LDQu9C1INGD0LHQuNGA0LDQtdGCINC/0YDRi9Cz0LDRjtGJ0LjQuSDRgdC60YDQvtC70Lsgd3JhcHBlciDigJMg0Y3RgtC+INC00LjQsiDQstC90YPRgtGA0Lgg0LHQvtC00LhcclxuICAgICAgICAgICAgLyogY29uc3QgbG9ja1BhZGRpbmdWYWx1ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLm9mZnNldFdpZHRoICsgXCJweFwiOyAqL1xyXG4gICAgICAgICAgICBjb25zdCBsb2NrUGFkZGluZ1ZhbHVlID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuY2xpZW50V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLm9mZnNldFdpZHRoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy/Qm9C+0Log0L/RjdC00LTQuNC90LMg0LTQvtCx0LDQstC70Y/QtdGCINC+0LHRitC10LrRgtCw0Lwg0YEg0L/QvtC30LjRiNC9INGE0LjQutGB0LQuINCd0LDQv9GA0LjQvNC10YAg0YXRjdC00Y3RgCDRgtCw0LrQvtC5LiDQntC9INGB0LLQuNC00LPQsNC10YLRgdGPLiDQldC80YMg0L3QsNC00L4g0YHRgtC40LvRjCDQv9C+0LTQv9GA0LDQstC40YLRjC5cclxuICAgICAgICAgICAgaWYgKGxvY2tQYWRkaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9ja1BhZGRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGxvY2tQYWRkaW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGxvY2tQYWRkaW5nVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBsb2NrUGFkZGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvL9Ce0L0g0LvQvtGH0LjRgiDQvdCwINCy0YDQtdC80Y8g0YLQsNC50LzQsNGD0YLQsCwg0L/QvtGC0L7QvNGDINGH0YLQviDQvtC60L3QviDQt9Cw0LrRgNGL0LLQsNC10YLRgdGPIDgwMCDQvNGBLiDQmCDRh9GC0L7QsdGLINCy0L4g0LLRgNC10LzRjyDQt9Cw0LrRgNGL0YLQuNGPINC90LUg0L7RgtC60YDRi9GC0Ywg0LHRi9C70L4g0L7QutC90L4g0YHQvdC+0LLQsFxyXG4gICAgICAgICAgICB1bmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/QvdC1INC00L4g0LrQvtC90YbQsFxyXG4gICAgICAgIGZ1bmN0aW9uIGJvZHlVbmxvY2soKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tQYWRkaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2tQYWRkaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gbG9ja1BhZGRpbmdbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB1bmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LndoaWNoID09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAub3BlblwiKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwQ2xvc2UocG9wdXBBY3RpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuXHJcbn0pOyJdfQ==



    const popupLinks = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
    
    
    let unlock = true; //чтобы не было двойных нажатий
    
    const timeout = 800; // Таймаут стоит такой же как у анимации в сиэсэс. Это связано с блокировкой строила и его адекватной работе
    
    if (popupLinks.length > 0) {
        for (let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener("click", function (evt) {
    
                const popupName = popupLink.getAttribute("href").replace("#", "");
                const currentPopup = document.getElementById(popupName);
                console.log(currentPopup)
                popupOpen(currentPopup);
                evt.preventDefault();
            })
        }
    }
    
    const popupCloseIcon = document.querySelectorAll(".close-popup");
    
    if (popupCloseIcon.length > 0) {
    
        for (let i = 0; i < popupCloseIcon.length; i++) {
            const el = popupCloseIcon[i];
            el.addEventListener("click", function (evt) {
                popupClose(el.closest(".popup")); // Клозест - это ближайший родитель ссылки с классом попап. То есть будет закрыт попап рядом с кликнутой ссылкой, а не какоцто другой. От ссылки событие всплывёт и сработает на родителе с классом попап
                evt.preventDefault();
            })
        }
    }
    
    //функция открытия
    
    function popupOpen(currentPopup) {
        //Вначале проверка на уже открытые попапы, чтобы закрыть их
        if (currentPopup && unlock) {
            const popupActive = document.querySelector(".popup.open");
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            currentPopup.classList.add("open");
    
            //закрытие по клику вне области контента
            currentPopup.addEventListener("click", function (evt) {
                if (!evt.target.closest(".popup__content")) {
                    popupClose(evt.target.closest(".popup"));
                }
            });
        }
    }
    
    
    //ФУНКЦИЯ ЗАКРЫТИЯ
    //В закрытии мы можем передать фолс для блокировки боди, когда мы открываем попап в попапе
    function popupClose(popupActive, doUnlock = true) {
        if (popupActive.querySelector('form')) {
            popupActive.querySelector('form').reset();
        }
        /* popupActive.querySelector('form').reset(); */
        if (unlock) {
            popupActive.classList.remove("open");
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }
    
    
    
    
    
    function bodyLock() {
        //Вначале убирает прыгающий скролл wrapper – это див внутри боди
        /* const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"; */
        const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";
    
    
        console.log(window.innerWidth);
        console.log(document.querySelector(".wrapper").offsetWidth);
    
        //Лок пэддинг добавляет объектам с позишн фиксд. Например хэдэр такой. Он свидгается. Ему надо стиль подправить.
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = lockPaddingValue;
            }
        }
    
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");
    
        //Он лочит на время таймаута, потому что окно закрывается 800 мс. И чтобы во время закрытия не открыть было окно снова
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
    
    
    //не до конца
    function bodyUnlock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let i = 0; i < lockPadding.length; i++) {
                    const el = lockPadding[i];
                    el.style.paddingRight = "0px";
                }
            }
            body.style.paddingRight = "0px";
            body.classList.remove('lock');
        }, timeout);
    
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout)
    }
    
    document.addEventListener('keydown', function (evt) {
        if (evt.which == 27) {
            const popupActive = document.querySelector(".popup.open");
            popupClose(popupActive);
        }
    });
    
    
    
    
    
    
    
    

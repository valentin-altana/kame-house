// POP-UPS

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (!event.target.closest('.popup') && !event.target.closest('.button')) {
            closeAllPopups();
        }
    });
});

function fadeOutAnimation(popup) {
    popup.style.animation = 'fadeOutScale 0.5s forwards';

    setTimeout(function () {
        popup.style.display = 'none';
        popup.style.animation = 'fadeInScale 0.5s forwards';
    }, 500);
}

function togglePopup(popupId) {
    let currentPopup = document.getElementById(popupId);
    let popups = document.querySelectorAll('.popup');
    let draw = document.querySelector('.draw');

    popups.forEach(function (item) {
        if (item !== currentPopup) {
            item.style.display = 'none';
        }
    });

    if (currentPopup.style.display === 'flex') {
        fadeOutAnimation(currentPopup);
        draw.classList.remove('blur');
        draw.classList.add('unblur');
    } else {
        currentPopup.style.display = 'flex';
        draw.classList.remove('unblur');
        draw.classList.add('blur');
    }
}

function closeAllPopups() {
    let popups = document.querySelectorAll('.popup');
    let draw = document.querySelector('.draw');

    popups.forEach(fadeOutAnimation);

    draw.classList.remove('blur');
    draw.classList.add('unblur');
}

// TRANSITIONS

const mainButtonsTransition = document.querySelectorAll('.main-buttons');

const buttonTransition = document.querySelectorAll('.button');

const webSiteTransition = document.querySelectorAll('.web-site');

const inputSubmitTransition = document.querySelectorAll('.input-submit');

function isMobileDevice() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/IEMobile/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/Opera Mini/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}

if (isMobileDevice() === false) {
    mainButtonsTransition.forEach(function (element) {
        element.classList.add('main-buttons-hover-active');
    });
    buttonTransition.forEach(function (element) {
        element.classList.add('button-hover-active');
    });
    webSiteTransition.forEach(function (element) {
        element.classList.add('web-site-hover-active');
    });
    inputSubmitTransition.forEach(function (element) {
        element.classList.add('input-submit-hover-active');
    });
} else {
    mainButtonsTransition.forEach(function (element) {
        element.classList.remove('main-buttons-hover-active');
    });
    buttonTransition.forEach(function (element) {
        element.classList.remove('button-hover-active');
    });
    webSiteTransition.forEach(function (element) {
        element.classList.remove('web-site-hover-active');
    });
    inputSubmitTransition.forEach(function (element) {
        element.classList.remove('input-submit-hover-active');
    });
}
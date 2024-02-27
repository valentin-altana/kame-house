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

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const elements = document.querySelectorAll('.main-buttons', '.button', '.web-site', '.input-submit');

if (isMobile()) {
    elements.forEach(function (elements) {
        elements.style.transition = 'none';
    });
}
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

    popups.forEach(function (item) {
        if (item !== currentPopup) {
            item.style.display = 'none';
        }
    });

    if (currentPopup.style.display === 'flex') {
        fadeOutAnimation(currentPopup);
    } else {
        currentPopup.style.display = 'flex';
    }
}

function closeAllPopups() {
    let popups = document.querySelectorAll('.popup');
    popups.forEach(fadeOutAnimation);
}
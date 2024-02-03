document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (!event.target.closest('.popup') && !event.target.closest('.button')) {
            closeAllPopups();
        }
    });
});

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    var popups = document.querySelectorAll('.popup');

    popups.forEach(function (item) {
        if (item !== popup) {
            item.style.display = 'none';
        }
    });

    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');

    popups.forEach(function (item) {
        item.style.display = 'none';
    });
}
document.addEventListener("DOMContentLoaded", function (event) {
    let path = window.location.pathname;
    if (path.search('search') >= 0) {
        document.body.className = '';
        document.body.className = 'searches show games-active';
    }

    if (path.search('category') >= 0) {
        document.body.className = '';
        document.body.className = 'categories show games-active';
    }

    checkSessions();

    window.addEventListener('click', function (e) {
        if (!document.getElementById('locale-selector-dropdown').contains(e.target)) {
            let element = document.getElementById("locate-dropdown");
            element.style.display = 'none';
        }
    });
});

function writeCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return '';
}

function makeID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function checkSessions() {
    let id = 'accepted';
    if (readCookie(id) != true && readCookie(id) != 'true') {
        let element = document.getElementById('policy-validation');
        element.style.display = 'block';
    }
}

function storeAccepted() {
    let status = true;
    let id = 'accepted';
    let element = document.getElementById('policy-validation');
    if (readCookie(id) != true && readCookie(id) != 'true') {
        writeCookie(id, status, 1);
        element.style.display = 'none';
    }
}

function dropDownLocate() {
    let element = document.getElementById("locate-dropdown");

    if (element.style.display == '' || element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

$(document).ready(function () {
    var pathname = window.location.pathname;
    if(pathname.indexOf('/search') != -1) {
        $("#mobile-search-icon").css('display', 'none');
    }
});

$("#mobile-search-icon").on("click", function () {
    $(this).css('display', 'none');
    $('nav').addClass('show-search-form hide-search-icon');
});

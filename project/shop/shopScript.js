var backgroundImg = 0;

function backgroundChange() {
    var SearchContentBody = document.getElementById('background-img');
    var SearchContentButtonBackground = document.getElementById('button-hot-pink');
    if (backgroundImg !== 0) {
        SearchContentBody.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        SearchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        ++backgroundImg;
    } else {
        SearchContentBody.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        SearchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        --backgroundImg;
    }
}

const searchContentAll = document.querySelectorAll('.grid-uniform__item');

function contentHoodieDisplay() {
    const searchContentHoodie = document.getElementsByClassName('grid-uniform__content--hoodie');
    for (var a = 0; a < searchContentAll.length; a++) {
        searchContentAll[a].classList.remove('contentDisplayBlock');
    }
    for (var i = 0; i < searchContentHoodie.length; i++) {
        searchContentHoodie[i].classList.add('contentDisplayBlock');
    }
}

function contentHatsDisplay() {
    const searchContentHats = document.getElementsByClassName('grid-uniform__content--hats');
    for (var a = 0; a < searchContentAll.length; a++) {
        searchContentAll[a].classList.remove('contentDisplayBlock');
    }
    for (var i = 0; i < searchContentHats.length; i++) {
        searchContentHats[i].classList.add('contentDisplayBlock');
    }
}

function contentPantsAndShortsDisplay() {
    const searchContentPantsAndShorts = document.getElementsByClassName('grid-uniform__content--pantsAndShorts');
    for (var a = 0; a < searchContentAll.length; a++) {
        searchContentAll[a].classList.remove('contentDisplayBlock');
    }
    for (var i = 0; i < searchContentPantsAndShorts.length; i++) {
        searchContentPantsAndShorts[i].classList.add('contentDisplayBlock');
    }
}

function contentTShirtsDisplay() {
    const searchContentTShirts = document.getElementsByClassName('grid-uniform__content--t-shirts');
    for (var a = 0; a < searchContentAll.length; a++) {
        searchContentAll[a].classList.remove('contentDisplayBlock');
    }
    for (var i = 0; i < searchContentTShirts.length; i++) {
        searchContentTShirts[i].classList.add('contentDisplayBlock');
    }
}

function contentMusicDisplay() {
    const searchContentMusic = document.getElementsByClassName('grid-uniform__content--music');
    for (var a = 0; a < searchContentAll.length; a++) {
        searchContentAll[a].classList.remove('contentDisplayBlock');
    }
    for (var i = 0; i < searchContentMusic.length; i++) {
        searchContentMusic[i].classList.add('contentDisplayBlock');
    }
}



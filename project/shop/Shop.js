
function contentTShirtsDisplay() {
    var searchContent = document.getElementsByClassName('grid-uniform__content--t-shirts');
    for (var i = 0; 1 < searchContent.length; i++) {
        searchContent[i].style.display = 'none';
    }
}


function contentPantsAndShortsDisplay() {
    var searchContent = document.getElementsByClassName('grid-uniform__content--pantsAndShorts');
    for (var i = 0; 1 < searchContent.length; i++) {
        searchContent[i].style.display = 'none';
    }
}

function contentHoodieDisplay() {
    var searchContent = document.getElementsByClassName('grid-uniform__content--hoodie');
    for (var i = 0; 1 < searchContent.length; i++) {
        searchContent[i].style.display = 'none';
    }
}

function contentHatsDisplay() {
    var searchContent = document.getElementsByClassName('grid-uniform__content--hats');
    for (var i = 0; 1 < searchContent.length; i++) {
        searchContent[i].style.display = 'none';
    }
}

function contentMusicDisplay() {
    var searchContent = document.getElementsByClassName('grid-uniform__content--music');
    for (var i = 0; 1 < searchContent.length; i++) {
        searchContent[i].style.display = 'none';
    }
}

var backgroundImg = 0;

function backgroundChange() {
    var searchContentBody = document.getElementById('background-img');
    var searchContentButtonBackground = document.getElementById('button-hot-pink');
    if (backgroundImg !== 0) {
        searchContentBody.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        searchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        ++backgroundImg;
    } else {
        searchContentBody.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        searchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        --backgroundImg;
    }
}
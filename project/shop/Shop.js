
function contentTShirtsDisplay() {
    var SearchContent = document.getElementsByClassName('grid-uniform__content--t-shirts');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}


function contentPantsAndShortsDisplay() {
    var SearchContent = document.getElementsByClassName('grid-uniform__content--pantsAndShorts');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentHoodieDisplay() {
    var SearchContent = document.getElementsByClassName('grid-uniform__content--hoodie');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentHatsDisplay() {
    var SearchContent = document.getElementsByClassName('grid-uniform__content--hats');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentMusicDisplay() {
    var SearchContent = document.getElementsByClassName('grid-uniform__content--music');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

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
    console.log('bac', backgroundImg);
}


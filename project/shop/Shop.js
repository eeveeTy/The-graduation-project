function contentTShirtsDisplay() {
    var SearchContent = document.getElementsByClassName('content__t-shirts');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentPantsAndShortsDisplay() {
    var SearchContent = document.getElementsByClassName('content__pants-and-shorts');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentHoodieDisplay() {
    var SearchContent = document.getElementsByClassName('content__hoodie');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentHatsDisplay() {
    var SearchContent = document.getElementsByClassName('content__hats');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

function contentMusicDisplay() {
    var SearchContent = document.getElementsByClassName('content__music');
    for (var i = 0; 1 < SearchContent.length; i++) {
        SearchContent[i].style.display = 'none';
    }
}

var background = 0;

function backgroundChange() {
    var SearchContentBody = document.getElementById('background-img');
    var SearchContentButtonBackground = document.getElementById('button-hot-pink');
    if (background !== 0) {
        SearchContentBody.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        SearchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        ++background;
    } else {
        SearchContentBody.style.backgroundImage = 'url(img/site-background-image-hot-pink.jpg)';
        SearchContentButtonBackground.style.backgroundImage = 'url(img/site-background-image-planet-her.jpg)';
        --background;
    }
    console.log('bac', background);
}
var mobileNavBtnClosed = document.querySelector('.mobile-nav__btn--closed');
var mobileNav = document.querySelector('.mobile-nav');
var mobileImg = document.querySelector('.mobile-img');
var background = document.querySelector('.mobile-nav__btn--closed');

mobileNavBtnClosed.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    mobileImg.style.display = 'block';
});

function mobileDisplayBlock() {
    mobileNav.style.display = 'block';
    mobileImg.style.display = 'none';
}

var w = document.querySelector('.mobile-nav');


window.addEventListener('resize', (e) => {
    var w = document.querySelector('.mobile-nav');
    var c = w.offsetWidth;
    if (c > 500) {
        w.style.display = 'none';
        mobileImg.style.display = 'block';
    }
});
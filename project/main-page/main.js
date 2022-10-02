var mobileNavBtnClosed= document.querySelector('.mobile-nav__btn--closed');
var mobileNav = document.querySelector('.mobile-nav');
var mobileImg = document.querySelector('.mobile-img');
var background = document.querySelector('.mobile-nav__btn--closed')

mobileNavBtnClosed.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    mobileImg.style.display = 'block';
});

function mobileDisplayBlock() {
    mobileNav.style.display = 'block';
    mobileImg.style.display = 'none';
}



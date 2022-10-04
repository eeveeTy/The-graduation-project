var newMenuSubmenu = document.querySelector('.newMenu-submenu');
var newMenuSubmenuImg = document.querySelector('.newMenu-submenu__img');
var newMenuSubmenuBtnClosed = document.querySelector('.newMenu-submenu__btn');

var value = 0;

newMenuSubmenuImg.addEventListener('click', function () {
    if (value === 0) {
        ++value;
        newMenuSubmenu.style.display = 'block';
    } else {
        --value;
        newMenuSubmenu.style.display = 'none';
    }
})

newMenuSubmenuBtnClosed.addEventListener('click', function () {
    newMenuSubmenu.style.display = 'none';
    value = 0;
})

window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth >= 1000) {
        newMenuSubmenu.style.display = 'none';
        value = 0;
    }
})
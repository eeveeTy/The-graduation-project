var backgroundValueAmala = 0;
var backgroundValueHotPink = 0;
var backgroundValuePlanetHer = 0;
var amalaContent = document.getElementById('amala-content');
var hotPinkContent = document.getElementById('hotPink-content');
var planetHerContent = document.getElementById('planetHer-content');


function backgroundAmalaClick() {
    if (backgroundValueAmala === 0) {
        var classBackgroundAmala = document.getElementById('body').className = 'backgroundAmala';
        amalaContent.style.display = 'block';
        ++backgroundValueAmala;
    } else {
        var classBackgroundAmala = document.getElementById('body').className = 'backgroundAmala';
        amalaContent.style.display = 'none';
        --backgroundValueAmala;
    }
}

function backgroundHotPinkClick() {
    if (backgroundValueHotPink === 0) {
        var classBackgroundHotPink = document.getElementById('body').className = 'backgroundHotPink';
        hotPinkContent.style.display = 'block';
        ++backgroundValueHotPink;
    } else {
        var classBackgroundHotPink = document.getElementById('body').className = 'backgroundHotPink';
        hotPinkContent.style.display = 'none';
        --backgroundValueHotPink;
    }
}

function backgroundPlanetHerClick() {
    if (backgroundValuePlanetHer === 0) {
        var classBackgroundPlanetHer = document.getElementById('body').className = 'backgroundPlanetHer';
        planetHerContent.style.display = 'block';
        ++backgroundValuePlanetHer;
    } else {
        var classBackgroundPlanetHer = document.getElementById('body').className = 'backgroundPlanetHer';
        planetHerContent.style.display = 'none';
        --backgroundValuePlanetHer;
    }
}
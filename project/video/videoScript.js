const videos = document.getElementById('videos');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#videos iframe');

let idNumber = 0;


function changeVideos() {
    if(idNumber > videos.length - 1) {
        idNumber = 0
    } else if(idNumber < 0) {
        idNumber = videos.length - 1
    }

    videos.style.transform = `translateX(${-idNumber * 1200}px)`
}


rightBtn.addEventListener('click', () => {
    idNumber++
    changeVideos()
})

leftBtn.addEventListener('click', () => {
    idNumber--
    changeVideos()
})
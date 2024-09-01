


// var prev = document.getElementById("prev")
// var prev = document.getElementById("next")
// var thumbnail = document.getElementsByClassName("thumbnail")
// var hero = document.getElementById("hero")

// var backgroundimg = new Array(

//     "images/bg1.png",
//     "images/bg2.png",
//     "images/bg3.png",
//     "images/bg4.png",
//     "images/bg5.png",
// );
// let i = 0;
// next.onclick = function(){

//     if(i < 4){
//         hero.style.backgroundImage = 'url("'+backgroundimg[i+1]+'")';
//         thumbnail[i+1].classList.add("active")
//         thumbnail[i].classList.remove("active")
//         i++;
//     }
// }
// prev.onclick = function(){
    
//     if(i > 0){
//         hero.style.backgroundImage = 'url("'+backgroundimg[i-1]+'")';
//         thumbnail[i-1].classList.add("active")
//         thumbnail[i].classList.remove("active")
//         i--;
//     }
// }


var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var thumbnails = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundimg = [
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png"
];

let i = 0;

nextButton.onclick = function() {
    if (i < backgroundimg.length - 1) {
        hero.style.backgroundImage = 'url("' + backgroundimg[i + 1] + '")';
        thumbnails[i + 1].classList.add("active");
        thumbnails[i].classList.remove("active");
        i++;
    }
}

prevButton.onclick = function() {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundimg[i - 1] + '")';
        thumbnails[i - 1].classList.add("active");
        thumbnails[i].classList.remove("active");
        i--;
    }
}

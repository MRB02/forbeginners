var music = document.getElementById("audio");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (music.paused) {
        music.play();
        icon.src = "./webpage_img/pause.png";
    } else {
        music.pause();
        icon.src = "./webpage_img/play.png";
    }
}
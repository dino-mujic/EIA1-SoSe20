"use strict";
var samples = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playsample(0); });
    document.querySelector(".button2").addEventListener("click", function () { playsample(1); });
    document.querySelector(".button3").addEventListener("click", function () { playsample(2); });
    document.querySelector(".button4").addEventListener("click", function () { playsample(3); });
    document.querySelector(".button5").addEventListener("click", function () { playsample(4); });
    document.querySelector(".button6").addEventListener("click", function () { playsample(5); });
    document.querySelector(".button7").addEventListener("click", function () { playsample(6); });
    document.querySelector(".button8").addEventListener("click", function () { playsample(7); });
    document.querySelector(".button9").addEventListener("click", function () { playsample(8); });
    document.querySelector(".fa-play").addEventListener("click", playbeat);
    function playsample(sampleplay) {
        var sound = new Audio(samples[sampleplay]);
        sound.play();
    }
});
//# sourceMappingURL=Aufgabe8Script.js.map
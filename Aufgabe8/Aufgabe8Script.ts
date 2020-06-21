var samples:string[] = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"]

window.addEventListener("load", function(){

document.querySelector(".button1").addEventListener("click", function(): void {playsample(0)});
document.querySelector(".button2").addEventListener("click", function(): void {playsample(1)});
document.querySelector(".button3").addEventListener("click", function(): void {playsample(2)});
document.querySelector(".button4").addEventListener("click", function(): void {playsample(3)});
document.querySelector(".button5").addEventListener("click", function(): void {playsample(4)});
document.querySelector(".button6").addEventListener("click", function(): void {playsample(5)});
document.querySelector(".button7").addEventListener("click", function(): void {playsample(6)});
document.querySelector(".button8").addEventListener("click", function(): void {playsample(7)});
document.querySelector(".button9").addEventListener("click", function(): void {playsample(8)});
document.querySelector(".fa-play").addEventListener("click", playbeat);

function playsample(sampleplay: number) {
    var sound = new Audio(samples[sampleplay]);
    sound.play();
}

var beat: string[] = ["hihat.mp3", "kick.mp3", "snare.mp3"];
var meinInterval: number;
function playbeat(): void {
    var meineZaehlervariable: number = 0;

    meinInterval = setInterval(function () {
        var playAudio: HTMLAudioElement = new Audio(beat[meineZaehlervariable]);
        playAudio.play();
        meineZaehlervariable++;
        if (meineZaehlervariable >= 3) {
            meineZaehlervariable = 0;
        }
    },                         500);
}

var playbutton = document.querySelector(".fa-play");
playbutton.addEventListener("click", function () {
    if (playbutton.getAttribute("class") == "fas fa-play") {
        playbutton.setAttribute("class", "fas fa-pause");
        playbeat();
    }
    else {
        playbutton.setAttribute("class", "fas fa-play");
        clearInterval(meinInterval);
    }
})

document.querySelector(".fa-trash-alt").addEventListener("click", function () { beatusdeletus(); });
function beatusdeletus(): void {
    beat.length = 0;
}

})

//Hilfe von Legende Anna
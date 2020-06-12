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
document.querySelector(".playbutton").addEventListener("click", playbeat);

function playsample(sampleplay: number) {
    var sound = new Audio(samples[sampleplay]);
    sound.play();
}

function playbeat() {
    setInterval(function() {
        playsample(5);
    }, 300);

    setInterval(function() {
        playsample(8);
    }, 500);

    setInterval(function() {
        playsample(4);
    }, 700);
}

});

// Hilfe durch die Antworten von Hannah auf die Fragen von Andy und Moritz in der Fragestunde 12.06.2020
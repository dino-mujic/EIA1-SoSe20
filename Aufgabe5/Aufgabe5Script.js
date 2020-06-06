"use strict";
var afri08 = 1028;
var afri18 = 1235.5;
var soam08 = 1132.6;
var soam18 = 1261.5;
var euro08 = 4965.7;
var euro18 = 4209.3;
var noam08 = 6600.4;
var noam18 = 6035.6;
var asia08 = 12954.7;
var asia18 = 16274.1;
var aust08 = 1993;
var aust18 = 2100.5;
var Emgesamt = afri18 + soam18 + euro18 + noam18 + asia18;
var afriReGe = (afri18 / Emgesamt) * 100;
var soamReGe = (soam18 / Emgesamt) * 100;
var euroReGe = (euro18 / Emgesamt) * 100;
var noamReGe = (noam18 / Emgesamt) * 100;
var asiaReGe = (asia18 / Emgesamt) * 100;
var austReGe = (aust18 / Emgesamt) * 100;
var afriV08 = (afri18 - afri08) / afri08 * 100;
var soamV08 = (soam18 - soam08) / soam08 * 100;
var euroV08 = (euro18 - euro08) / euro08 * 100;
var noamV08 = (noam18 - noam08) / noam08 * 100;
var asiaV08 = (asia18 - asia08) / asia08 * 100;
var austV08 = (aust18 - aust08) / aust08 * 100;
var afriV08P = afri18 - afri08;
var soamV08P = soam18 - soam08;
var euroV08P = euro18 - euro08;
var noamV08P = noam18 - noam08;
var asiaV08P = asia18 - asia08;
var austV08P = aust18 - aust08;
console.log("Die Emission von Europa ist: " + euro18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + euroReGe + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euroV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + euroV08P + "kg CO2");
console.log("");
console.log("Die Emission von Afrika ist " + afri18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afriReGe + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afriV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + afriV08P + "kg CO2");
console.log("");
console.log("Die Emission von Asia ist " + asia18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asia damit " + asiaReGe + "%");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asiaV08P + "kg CO2");
console.log("");
console.log("Die Emission von South Amerika ist " + soam18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht South Amerika damit " + soamReGe + "%");
console.log("Für South Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + soamV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + soamV08P + "kg CO2");
console.log("");
console.log("Die Emission von North Amerika ist " + noam18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht North Amerika damit " + noamReGe + "%");
console.log("Für North Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + noamV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + noamV08P + "kg CO2");
console.log("");
window.addEventListener("load", function () {
    document.querySelector(".europepng").addEventListener("click", europefunction);
    function europefunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in Europe";
        document.querySelector(".EmAb").innerHTML = euro18;
        document.querySelector(".ReToWorld").innerHTML = euroReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = euroV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = euroV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 14.5%");
    }
    document.querySelector(".northamericapng").addEventListener("click", northamericafunction);
    function northamericafunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in North America";
        document.querySelector(".EmAb").innerHTML = noam18;
        document.querySelector(".ReToWorld").innerHTML = noamReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = noamV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = noamV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 20.8%");
    }
    document.querySelector(".southamericapng").addEventListener("click", southamericafunction);
    function southamericafunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in South America";
        document.querySelector(".EmAb").innerHTML = soam18;
        document.querySelector(".ReToWorld").innerHTML = soamReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = soamV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = soamV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 4.35%");
    }
    document.querySelector(".africapng").addEventListener("click", africafunction);
    function africafunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in Africa";
        document.querySelector(".EmAb").innerHTML = afri18;
        document.querySelector(".ReToWorld").innerHTML = afriReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = afriV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = afriV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 4.26%");
    }
    document.querySelector(".asiapng").addEventListener("click", asiafunction);
    function asiafunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in Asia";
        document.querySelector(".EmAb").innerHTML = asia18;
        document.querySelector(".ReToWorld").innerHTML = asiaReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = asiaV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = asiaV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 56.1%");
    }
    document.querySelector(".australiapng").addEventListener("click", australiafunction);
    function australiafunction() {
        document.querySelector(".h1").innerHTML = "Carbon Dioxide Emissions in Australia";
        document.querySelector(".EmAb").innerHTML = aust18;
        document.querySelector(".ReToWorld").innerHTML = austReGe.toFixed(2) + "%";
        document.querySelector(".GrRaPer").innerHTML = austV08P.toFixed(2) + "%";
        document.querySelector(".GrRaAb").innerHTML = austV08.toFixed(2) + "kg";
        document.querySelector("div.chart").setAttribute("Style", "height: 7.25%");
    }
});
//# sourceMappingURL=Aufgabe5Script.js.map
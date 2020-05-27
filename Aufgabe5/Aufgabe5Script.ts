var afri08 : number = 1028;
var afri18 : number = 1235.5;
var soam08 : number = 1132.6;
var soam18 : number = 1261.5;
var euro08 : number = 4965.7;
var euro18 : number = 4209.3;
var noam08 : number = 6600.4;
var noam18 : number = 6035.6;
var asia08 : number = 12954.7;
var asia18 : number = 16274.1;

var Emgesamt : number = afri18 + soam18 + euro18 + noam18 + asia18;
var afriReGe : number = (afri18 / Emgesamt) *100;
var soamReGe : number = (soam18 / Emgesamt) *100;
var euroReGe : number = (euro18 / Emgesamt) *100;
var noamReGe : number = (noam18 / Emgesamt) *100;
var asiaReGe : number = (asia18 / Emgesamt) *100;

var afriV08 : number = (afri18 - afri08) / afri08 * 100;
var soamV08 : number = (soam18 - soam08) / soam08 * 100;
var euroV08 : number = (euro18 - euro08) / euro08 * 100;
var noamV08 : number = (noam18 - noam08) / noam08 * 100;
var asiaV08 : number = (asia18 - asia08) / asia08 * 100;

var afriV08P : number = afri18 - afri08;
var soamV08P : number = soam18 - soam08;
var euroV08P : number = euro18 - euro08;
var noamV08P : number = noam18 - noam08;
var asiaV08P : number = asia18 - asia08;

console.log("Die Emission von Europa ist: " + euro18 , "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + euroReGe,"%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euroV08,"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + euroV08P , "kg CO2");
console.log("");

console.log("Die Emission von Afrika ist " + afri18 , "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afriReGe,"%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afriV08,"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +afriV08P , "kg CO2");
console.log("");

console.log("Die Emission von Asia ist " + asia18 , "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asia damit " + asiaReGe,"%");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaV08,"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asiaV08P , "kg CO2");
console.log("");

console.log("Die Emission von South Amerika ist " + soam18 , "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht South Amerika damit " + soamReGe,"%");
console.log("Für South Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + soamV08,"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + soamV08P , "kg CO2");
console.log("");

console.log("Die Emission von North Amerika ist " + noam18 , "kg CO2" );
console.log("Relativ zur Gesamtemission der Welt verursacht North Amerika damit " + noamReGe,"%");
console.log("Für North Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + noamV08,"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + noamV08P , "kg CO2");
console.log("");



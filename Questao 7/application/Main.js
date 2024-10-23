"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControleDeAudio_1 = require("../entities/ControleDeAudio");
function main() {
    var aparelho = new ControleDeAudio_1.ControleDeAudio(2);
    console.log("Volume inicial: ".concat(aparelho.lerVolume()));
    aparelho.aumentarVolume();
    aparelho.aumentarVolumeVariasVezes(3);
    console.log("Volume apos aumentado 4 vezes: ".concat(aparelho.lerVolume()));
    aparelho.diminuirVolume();
    aparelho.diminuirVolumeVariasVezes(2);
    console.log("Volume apos diminuido 3 vezes: ".concat(aparelho.lerVolume()));
}
main();

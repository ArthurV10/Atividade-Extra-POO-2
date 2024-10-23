"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleDeAudio = void 0;
var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio(volume) {
        this.minVolume = 0;
        this.maxVolume = 10;
        this.volume = volume;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        if (this.volume < this.maxVolume) {
            this.volume += 1;
        }
    };
    ControleDeAudio.prototype.aumentarVolumeVariasVezes = function (qtdVezes) {
        if (this.volume < this.maxVolume) {
            this.volume += qtdVezes;
            if (this.volume > this.maxVolume) {
                this.volume = this.maxVolume;
            }
        }
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        if (this.volume > this.minVolume) {
            this.volume -= 1;
        }
    };
    ControleDeAudio.prototype.diminuirVolumeVariasVezes = function (qtdVezes) {
        if (this.volume > this.minVolume) {
            this.volume -= qtdVezes;
            if (this.volume < this.minVolume) {
                this.volume = this.minVolume;
            }
        }
    };
    ControleDeAudio.prototype.lerVolume = function () {
        return this.volume;
    };
    return ControleDeAudio;
}());
exports.ControleDeAudio = ControleDeAudio;

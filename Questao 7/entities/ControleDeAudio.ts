export class ControleDeAudio{
    private volume: number;
    private readonly minVolume : number = 0;
    private readonly maxVolume : number = 10;

    constructor(volume:number){
        this.volume = volume;
    }

    aumentarVolume():void{
        if(this.volume < this.maxVolume){
            this.volume += 1;

        }
    }

    aumentarVolumeVariasVezes(qtdVezes:number){
        if(this.volume < this.maxVolume){
            this.volume += qtdVezes;
            if (this.volume > this.maxVolume){
                this.volume = this.maxVolume;
            }
        }
    }

    diminuirVolume():void{
        if(this.volume > this.minVolume){
            this.volume -= 1;
        }
    }

    diminuirVolumeVariasVezes(qtdVezes: number): void{
        if (this.volume > this.minVolume){
            this.volume -= qtdVezes;
            if (this.volume < this.minVolume){
                this.volume = this.minVolume;
            }
        }
    }

    lerVolume():number{
        return this.volume;
    }
}
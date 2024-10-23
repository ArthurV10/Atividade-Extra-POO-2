package entities;

public class ControleDeAudio {
    private int volume;
    private final int minVolume = 0;
    private final int maxVolume = 10;

    public ControleDeAudio(int volume){
        this.volume = volume;
    }

    public void aumentarVolume(){
        if (this.volume < this.maxVolume){
            this.volume += 1;
        }
    }

    public void aumentarVolumeVariasVezes(int qtdVezes){
        if (this.volume < this.maxVolume){
            this.volume += qtdVezes;
            if (this.volume > this.maxVolume){
                this.volume = this.maxVolume;
            }
        }
    }

    public void diminuirVolume(){
        if (this.volume > this.minVolume){
            this.volume -= 1;
        }
    }

    public void diminuirVolumeVariasVezes(int qtdVezes){
        if (this.volume > this.minVolume){
            this.volume -= qtdVezes;
            if (this.volume < this.minVolume){
                this.volume = 0;
            }
        }
    }

    public int lerVolume(){
        return this.volume;
    }
}
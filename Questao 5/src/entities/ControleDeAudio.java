package entities;

public class ControleDeAudio {
    private int volume;

    public ControleDeAudio(int volume){
        this.volume = volume;
    }

    public void diminuirVolume(){
        if (this.volume > 0){
            this.volume -= 1;
        }
    }

    public void diminuirVolumeVariasVezes(int qtdVezes){
        if (this.volume > 0){
            this.volume -= qtdVezes;
            if (this.volume < 0){
                this.volume = 0;
            }
        }
    }

    public int lerVolume(){
        return this.volume;
    }
}
package application;
import entities.ControleDeAudio;

public class Main {
    public static void main(String[] args) {
        ControleDeAudio aparelho = new ControleDeAudio(2);
        System.out.printf("Volume atual: %d\n", aparelho.lerVolume());
        aparelho.diminuirVolume();
        aparelho.diminuirVolumeVariasVezes(4);
        System.out.printf("Volume apos reduzido 4 vezes: %d\n", aparelho.lerVolume());
    }
}
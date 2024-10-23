package application;
import entities.ControleDeAudio;

public class Main {
    public static void main(String[] args) {
        ControleDeAudio aparelho = new ControleDeAudio(2);
        System.out.printf("Volume atual: %d\n", aparelho.lerVolume());

    // Isso foi feito para mostrar que os dois metodos estão funcionais
        aparelho.diminuirVolume();
        aparelho.diminuirVolumeVariasVezes(4);

        System.out.printf("Volume apos reduzido 4 vezes: %d\n", aparelho.lerVolume());

        aparelho.aumentarVolume();
        aparelho.aumentarVolumeVariasVezes(5);

        System.out.printf("Volume apos ser aumentado 6 vezes: %d\n", aparelho.lerVolume());
    }
}
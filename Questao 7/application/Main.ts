import {ControleDeAudio} from "../entities/ControleDeAudio";

function main(){
    const aparelho = new ControleDeAudio(2);
    console.log(`Volume inicial: ${aparelho.lerVolume()}`);

    // Isso foi feito para mostrar que os dois metodos estão funcionais
    aparelho.aumentarVolume();
    aparelho.aumentarVolumeVariasVezes(3);

    console.log(`Volume apos aumentado 4 vezes: ${aparelho.lerVolume()}`);
    
    aparelho.diminuirVolume();
    aparelho.diminuirVolumeVariasVezes(2);

    console.log(`Volume apos diminuido 3 vezes: ${aparelho.lerVolume()}`)
}
main()
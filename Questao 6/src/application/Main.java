package application;
import entities.Retangulo;

public class Main {
    public static void main(String[] args) {

        Retangulo retangulo = new Retangulo(5.0, 5.0);
        double area = retangulo.calcularArea();
        String tipoFigura = !retangulo.verificarQuadrado() ? "retangulo":"quadrado";
        double perimetro = retangulo.calcularPerimetro();

        System.out.printf("Esta figura é um %s\n========================\n", tipoFigura);
        System.out.printf("Área do %s: %.1f\n", tipoFigura, area);
        System.out.printf( "Perímetro do %s: %.1f\n", tipoFigura, perimetro);
    }
}
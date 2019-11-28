"use-strict";
/**
 * 23.Mostrar los múltiplos de 8 hasta el valor 500. Debe apareceren pantalla 8 -16 -24, etc.
 */
const num = 8; //Constante para la multiplicacion con el aumento
let aumento = 2; //Variable para hacer la serie
let resultado = num; //Variable para almacenar el valor de la operacion de num * resultado

document.write("<br><h3>Serie de números</h3><hr>");

document.write("<p>Serie >")

while(resultado < 500){
    document.write("<b> " + resultado);
    resultado = num * aumento;
    aumento++;
}
document.write("</b></p>");
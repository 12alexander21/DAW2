"use-strict";
/**
 * 27. Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc.
 *  (No se ingresan valores por teclado).
 */
const num = 5; //Constante para la multiplicacion con el aumento
let aumento = 2; //Variable para hacer la serie
let resultado = num; //Variable para almacenar el valor de la operacion de num * resultado

document.write("<br><h3>Terminos de una serie</h3><hr>");

document.write("<p>Serie >")
for (let index = 0; index < 20; index++) {
    document.write("<b> " + resultado);
    resultado = num * aumento;
    aumento++;
}
document.write("</b></p>");
"use-strict";

const num = 10; //Constante para la multiplicacion con el aumento
let aumento = 2; //Variable para hacer la serie
let resultado = num; //Variable para almacenar el valor de la operacion de num * resultado

document.write("<br><h3>Múltiplos del 10</h3><hr>");

document.write("<p>Serie >")

while(resultado <= 1500){
    document.write("<b> " + resultado);
    resultado = num * aumento;
    aumento++;
}
document.write("</b></p>");
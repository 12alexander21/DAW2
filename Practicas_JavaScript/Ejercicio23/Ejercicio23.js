"use-strict";

const num = 8;
let aumento = 2;
let resultado = num;

document.write("<br><h3>Serie de números</h3><hr>");

document.write("<p>Serie >")

while(resultado < 500){
    document.write("<b> " + resultado);
    resultado = num * aumento;
    aumento++;
}
document.write("</b></p>");
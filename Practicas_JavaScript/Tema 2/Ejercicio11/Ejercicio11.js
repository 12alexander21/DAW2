"use-strict";

let notas = [];
let promedio = 0;

document.write("<br><h3>Cálculo de notas</h3><hr>");

notas[0] = String(prompt("Introduzca la primera nota"));
notas[1] = String(prompt("Introduzca la segunda nota"));
notas[2] = String(prompt("Introduzca la última nota"));

promedio = ((Number(notas[0]) + Number(notas[1]) + Number(notas[2])) / 3);

document.write("<h4>Notas > " + notas[0] + " | " + notas[1] + " | " + notas[2] + "</h4>");
document.write("<h4>Nota media > " + Math.round(promedio) + "</h4>");

if (promedio >= 7) 
    document.write("<h4>¡Promocionado!</h4>");
/******************************************************************************************** */

let clave = "";

document.write("<br><h3>Comprobación de clave</h3><hr>");

clave = prompt("Introduzca una clave");

if (clave == prompt("Repita la misma clave")){
    document.write("<h4>Las claves son iguales</h4>");
}
"use-strict";

let cuadrado = "";
let resultado = "";

cuadrado = prompt("Introduzca el lado de un cuadrado");
areaCuadrado = Math.pow(cuadrado, 2);

document.write("<h2>Área del cuadrado</h2><hr>");

document.write("<h3>Lado del cuadrado = " + cuadrado + "</h3>");
document.write("<h3>Área del cuadrado = " + areaCuadrado + "</h3>");
/************************************************************************************* */

let numeros = 0;

numeros = prompt("Introduzca 4 números");

document.write("<h2>Suma de dos números y producto de otros dos</h2><hr>");

document.write("<h3>Suma de los dos primeros números > " +  numeros[0] + " + " + numeros[1] + " = " + (Number(numeros[0]) + Number(numeros[1])) + "</h3>");
document.write("<h3>Multiplicación de los dos primeros números > " +  numeros[2] + " x " + numeros[3] + " = " + numeros[2] * numeros[3] + "</h3>");
/************************************************************************************* */

let sumaYProd = 0;

sumaYProd = prompt("Introduzca 4 numeros")
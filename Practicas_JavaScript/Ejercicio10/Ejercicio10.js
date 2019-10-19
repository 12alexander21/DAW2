"use-strict";

let cuadrado = "";
let resultado = "";

cuadrado = prompt("Introduzca el lado de un cuadrado");
areaCuadrado = Math.pow(cuadrado, 2);

document.write("<br><h3>Área del cuadrado</h3><hr>");

document.write("<h4>Lado del cuadrado = " + cuadrado + "</h4>");
document.write("<h4>Área del cuadrado = " + areaCuadrado + "</h4>");
/************************************************************************************* */

let numeros = 0;

numeros = prompt("Introduzca 4 números");

document.write("<h3>Suma de dos números y producto de otros dos</h3><hr>");

document.write("<h4>Suma de los dos primeros números > " +  numeros[0] + " + " + numeros[1] + " = " + (Number(numeros[0]) + Number(numeros[1])) + "</h4>");
document.write("<h4>Multiplicación de los dos primeros números > " +  numeros[2] + " x " + numeros[3] + " = " + numeros[2] * numeros[3] + "</h4>");
/************************************************************************************* */

let sumaYProd = "";
let sumaTodo = 0;
let prodTodo = 1;

sumaYProd = prompt("Introduzca 4 cifras");

document.write("<h3>Suma y producto de todos los números</h3><hr>");

for (let i = 0; i < sumaYProd.length; i++) {
    sumaTodo += Number(sumaYProd[i]);
    prodTodo *= sumaYProd[i];
}

document.write("<h4>Suma de todos los números > " + sumaTodo + "</h4>");
document.write("<h4>Producto de todos los números > " + prodTodo + "</h4>");

/************************************************************************************* */

let precioArt = 0;
let cantidad = 0;

precioArt = prompt("Introduzca el precio del artículo");
cantidad = prompt("Introduzca la cantidad");

document.write("<h3>Cálculo del pago del comprador</h3><hr>");

document.write("<h4>Precio total de todos los artículos > " + (precioArt * cantidad) + "</h4>");
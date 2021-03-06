"use-strict";
/**
 * 10.Codificar los siguientes apartados:
 * a.Realizar la carga del lado de un cuadrado, mostrar por pantalla el
 *  perímetro del mismo (El perímetro de un cuadrado se calcula multiplicando
 *  el valor del lado por cuatro). 
 * b.Escribir  un  programa  en  el cual  se  ingresen cuatro  números, calcular e
 *   informar la  suma  de los  dos primeros y el producto del tercero y el cuarto.
 * c.Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.
 * d.Se debe desarrollar un programa que pida el ingreso del precio de un artículo y
 *  la cantidad de estos que lleva el cliente. Mostrar lo que debe abonar el comprador.
 */
let cuadrado = "";
let resultado = "";

document.write("<br><h3>Área del cuadrado</h3><hr>");

cuadrado = prompt("Introduzca el lado de un cuadrado");
resultado = cuadrado * 4;

document.write("<h4>Lado del cuadrado = " + cuadrado + "</h4>");
document.write("<h4>Perímetro del cuadrado = " + resultado + "</h4>");
/************************************************************************************* */

let numeros = 0;

document.write("<h3>Suma de dos números y producto de otros dos</h3><hr>");

numeros = prompt("Introduzca 4 números");

document.write("<h4>Suma de los dos primeros números > " +  numeros[0] + " + " + numeros[1] + " = " + (Number(numeros[0]) + Number(numeros[1])) + "</h4>");
document.write("<h4>Multiplicación de los dos primeros números > " +  numeros[2] + " x " + numeros[3] + " = " + numeros[2] * numeros[3] + "</h4>");
/************************************************************************************* */

let sumaYProd = "";
let sumaTodo = 0;
let prodTodo = 1;

document.write("<h3>Suma y producto de todos los números</h3><hr>");

sumaYProd = prompt("Introduzca 4 cifras");

for (let i = 0; i < sumaYProd.length; i++) {
    sumaTodo += Number(sumaYProd[i]);
    prodTodo *= sumaYProd[i];
}

document.write("<h4>Suma de todos los números > " + sumaTodo + "</h4>");
document.write("<h4>Producto de todos los números > " + prodTodo + "</h4>");

/************************************************************************************* */

let precioArt = 0;
let cantidad = 0;

document.write("<h3>Cálculo del pago del comprador</h3><hr>");

precioArt = prompt("Introduzca el precio del artículo");
cantidad = prompt("Introduzca la cantidad");

document.write("<h4>Precio total de todos los artículos > " + (precioArt * cantidad) + "</h4>");
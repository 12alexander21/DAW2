'use strict';
/**
 * Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.
 */
let lado = 0;

document.write("<h3>Cálculo del périmetro de un cuadrado</h3><hr>");

lado = parseInt(prompt("Introduzca un lado de un cuadrado"));

document.write(`<p>El perímetro de un cuadrado con un lado de <b>${lado}</b> es
igual a <b>${calculoPerimetro(lado)}</b></p>`);

function calculoPerimetro(lado) {
   return lado * 4; 
}
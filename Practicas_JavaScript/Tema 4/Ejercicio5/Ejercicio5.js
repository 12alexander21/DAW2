'use strict';
/**
 * Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.
 */




let num = 0;

document.write("<h3>Cantidad de dígitos de un número</h3><hr>");

num = parseInt(prompt("Introduzca un número entero positivo"));

if (num < 0 || isNaN(num)){
    document.write(`<p>El número no es positivo o no es un número</p>`);
}
else{
    document.write(`<p>El número <b>${num}</b> tiene <b>${cantidadDigitos(num)}</b> dígitos</p>`)
}

function cantidadDigitos(num) {
    return num.toString().length;
}
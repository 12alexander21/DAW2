'use strict';
/**
 * Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
 */

let numeros = [];

document.write("<h3>Encontrar el número menor</h3><hr>")

numeros.push(parseInt(prompt("Introduzca el primer número")));
numeros.push(parseInt(prompt("Introduzca el segundo número")));
numeros.push(parseInt(prompt("Introduzca el último número")));

document.write(`<p>El número más pequeño de <b>${numeros}</b> es <b>${numeroMenor(numeros)}</b></p>`);

function numeroMenor(numeros) {
    return Math.min(...numeros);
}
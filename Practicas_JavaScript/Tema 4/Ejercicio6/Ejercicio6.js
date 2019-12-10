'use strict';
/**
 * Elaborar una función que reciba tres enteros y retorne el promedio.
 */
let numeros = [];

document.write("<h3>Calcular promedio de tres números</h3><hr>");

numeros.push(parseInt(prompt("Introduzca el primer número")));
numeros.push(parseInt(prompt("Introduzca el segundo número")));
numeros.push(parseInt(prompt("Introduzca el último número")));

document.write(`<p>El promedio de los números <b>${numeros}</b> es <b>${promedio(numeros)}</b></p>`);

function promedio(numeros) {
    return numeros.reduce((suma, valor) => suma + valor) / numeros.length;
}
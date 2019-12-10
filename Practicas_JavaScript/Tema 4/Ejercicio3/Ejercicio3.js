'use strict';
/**
 * Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.
 */

let numeros = [];

document.write("<h3>Encontrar el número mayor</h3><hr>")

numeros.push(parseInt(prompt("Introduzca el primer número")));
numeros.push(parseInt(prompt("Introduzca el segundo número")));
numeros.push(parseInt(prompt("Introduzca el último número")));

document.write(`<p>El número más grande de <b>${numeros}</b> es <b>${numeroMayor(numeros)}</b></p>`);

function numeroMayor(numeros) {
    return Math.max(...numeros);
}
'use strict';
/**
 * Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.
 */

let numeros = [];

document.write("<h3>Encontrar el número menor</h3><hr>")

numeros.push(parseInt(prompt("Introduzca el primer número")));
numeros.push(parseInt(prompt("Introduzca el segundo número")));
numeros.push(parseInt(prompt("Introduzca el último número")));

document.write(`<p>Los tres números <b>${numeros}</b> ordenados de menor a mayor son <b>${ordenarNumeros(numeros)}</b></p>`);

function ordenarNumeros(numeros) {
    return numeros.sort();
}
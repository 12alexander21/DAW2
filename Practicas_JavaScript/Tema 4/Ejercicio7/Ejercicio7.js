'use strict';
/**
 * Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
 */
let numeros = [];

document.write("<h3>Calcular suma de cinco números</h3><hr>");

numeros.push(parseInt(prompt("Introduzca el primer número")));
numeros.push(parseInt(prompt("Introduzca el segundo número")));
numeros.push(parseInt(prompt("Introduzca el tercer número")));
numeros.push(parseInt(prompt("Introduzca el cuarto número")));
numeros.push(parseInt(prompt("Introduzca el último número")));

document.write(`<p>El promedio de los números <b>${numeros}</b> es <b>${suma(numeros)}</b></p>`);

function suma(numeros) {
    return numeros.reduce((suma, valor) => suma + valor);
}
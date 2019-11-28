"use-strict";
/**
 * El factorial de un número entero n es una operación matemática que consiste
 *  en multiplicar todos los factores n x (n-1) x (n-2) x... x 1.
 */
let numero = prompt("Introduzca un número para calcular su factorial");
let result = 1; //Almacena el resultado de la operación

for (let i = numero; i > 1; i--) {
    result *= i;
}
alert(result);
"use-strict";

let numero = prompt("Introduzca un número para calcular su factorial");
let result = 1; //Almacena el resultado de la operación

for (let i = numero; i > 1; i--) {
    result *= i;
}
alert(result);
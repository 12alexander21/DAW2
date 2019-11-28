"use-strict";
/**
 * Realizar un programa que sume todos los números menores o igual que otro dado.
 */
let numero = Number(prompt("Introduzca el número con la que realizar la operación"));
let result = 0; //Almacena el resultado de la operación

for ( ; numero > 0; numero--) {
    result += numero;    
}
alert(result);
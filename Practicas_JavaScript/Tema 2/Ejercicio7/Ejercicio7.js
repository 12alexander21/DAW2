"use-strict";

let numero = Number(prompt("Introduzca el número con la que realizar la operación"));
let result = 0; //Almacena el resultado de la operación

for ( ; numero > 0; numero--) {
    result += numero;    
}
alert(result);
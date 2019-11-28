"use-strict";
/**
 * 37. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
 * a. La cantidad de valores negativos ingresados.
 * b. La cantidad de valores positivos ingresados.
 * c. La cantidad de múltiplos de 15.
 * d. El valor acumulado de los números ingresados que son pares.
 */
let numeros = Array(10);
let numerosNegativos = 0;
let numerosPositivos = 0;
let multiplosQuince = 0;
let acumNumPares = 0;

document.write("<br><h3>Comprobaciones con números</h3><hr>");

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = prompt("Introduzca un numero (" + (i + 1) + "/" + numeros.length + ")");
    if (!isNaN(numeros[i])){
        numeros[i] = parseInt(numeros[i]);
    }

    if (numeros[i] > 0){
        numerosPositivos++;
    }
    else if (numeros[i] < 0){
        numerosNegativos++;
    }

    if (numeros[i] % 15 === 0 && numeros[i] !== 0){
        multiplosQuince++;
    }
    if (numeros[i] % 2 === 0){
        acumNumPares += numeros[i];
    }
}
document.write("<p>Cantidad de números positivos > <b>" + numerosPositivos + "</b></p>");
document.write("<p>Cantidad de números negativos > <b>" + numerosNegativos + "</b></p>");
document.write("<p>Cantidad de múltiplos de 15 > <b>" + multiplosQuince + "</b></p>");
document.write("<p>Valor acumulado de números pares > <b>" + acumNumPares + "</b></p>");
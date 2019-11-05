"use-strict";

let numeros = [];
let num = 0;
let cantidadPares = 0;
let cantidadImpares = 0;


document.write("<br><h3>Pares e impares</h3><hr>");

for (let cadaNum = 0; cadaNum < 5; cadaNum++) {
    num = prompt("Numero Nº " + (cadaNum + 1));
    if (isNaN(num) || num.toString().length == 0){
        alert("Valor incorrecto");
    }
    else {
        numeros.push(parseInt(num));
    }
}

for (let numero = 0; numero < numeros.length; numero++) {
    if (numeros[numero] % 2 === 0){
        cantidadPares++;
    }
    else {
        cantidadImpares++;
    }
}

document.write("<p>Cantidad de números pares > <b>" + cantidadPares + "</b></p>");
document.write("<p>Cantidad de números impares > <b>" + cantidadImpares + "</b></p>");
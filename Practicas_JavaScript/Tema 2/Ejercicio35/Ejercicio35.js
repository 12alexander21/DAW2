"use-strict";

let num = 0;
let sumaNumeros = 0;

document.write("<br><h3>Suma de números</h3><hr>");

for (let i = 0; i < 10; i++) {
    num = Number(prompt("Número " + (i + 1)));
    if (i >= 5 && i <= 9){
        sumaNumeros += num;
    }
}

document.write("<p>La suma de los últimos 5 números es > <b>" + sumaNumeros + "</b></p>")
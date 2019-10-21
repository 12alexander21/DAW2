"use-strict";

let num1 = 0, num2 = 0, num3 = 0;

document.write("<br><h3>Menores a 10</h3><hr>");

num1 = parseInt(prompt("Introduzca el primer número"));
num2 = parseInt(prompt("Introduzca el segundo número"));
num3 = parseInt(prompt("Introduzca el tercer número"));

if (num1 < 10 && num2 < 10 && num3 < 10){
    document.write("<h4>Todos los números son menores a diez</h4>")
}
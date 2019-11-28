"use-strict";
/**
 * 12.Realizar un programa que lea por teclado dos números, si el primero
 *  es mayor al segundo informarsu suma y diferencia, en caso contrario
 *  informar el producto y la división del primero respecto al segundo.
 */
let num1 = 0;
let num2 = 0;

document.write("<br><h3>Cálculo de notas</h3><hr>");

num1 = prompt("Introduzca el primer número");
num2 = prompt("Introduzca el segundo número");

if (num1 > num2){
    document.write("<h4>El primer número es mayor que el segundo</h4>");
    document.write("<h4>Suma > " + (Number(num1) + Number(num2)) + "</h4>");
    document.write("<h4>Resta > " + (num1 - num2) + "</h4>");
}
else if (num2 > num1){
    document.write("<h4>El segundo número es mayor que el primero</h4>");
    document.write("<h4>Multiplicación > " + (num1 * num2) + "</h4>");
    document.write("<h4>División > " + (num1 / num2) + "</h4>");
}
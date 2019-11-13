"use-strict";

let num1 = 0, num2 = 0, num3 = 0;

num1 = prompt("Introduzca el primer número");
num2 = prompt("Introduzca el segundo número");
num3 = prompt("Introduzca el último número");

document.write("<br>");

if (num1 > num2 && num1 > num3){
    document.write("<h4>El número " + num1 + " es el mayor</h4>");
}
else if (num2 > num1 && num2 > num3){
    document.write("<h4>El número " + num2 + " es el mayor</h4>");
}
else if (num3 > num1 && num3 > num2){
    document.write("<h4>El número " + num3 + " es el mayor</h4>");
}
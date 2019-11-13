"use-strict";

let num = 0;

num = prompt("Introduzca un número de una o dos cifras");
num = parseInt(num);

if (num >= 0 && num <= 9){
    document.write("<h4>El número " + num + " tiene una cifra</h4>");
}
else if (num >= 10 && num <= 99){
    document.write("<h4>El número " + num + " tiene dos cifras</h4>");
}
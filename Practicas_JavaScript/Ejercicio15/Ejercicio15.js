"use-strict";

let num = 0;

num = prompt("Introduzca un número de hasta 3 cifras");
num = parseInt(num);

if (num > 999){
    alert("El número introducido es incorrecto");
}
else{
    if (num >= -9 && num <= 9){
        document.write("<h4>El número " + num + " tiene 1 cifra</h4>");
    }
    else if (num >= -99 && num <= 99){
        document.write("<h4>El número " + num + " tiene 2 cifras</h4>");
    }
    else if (num >= -999 && num <= 999){
        document.write("<h4>El número " + num + " tiene 3 cifras</h4>");
    }
}
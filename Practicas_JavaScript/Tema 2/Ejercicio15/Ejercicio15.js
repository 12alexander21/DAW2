"use-strict";
/**
 * 15.Confeccionar un  programa  que permita cargar  un  número entero positivo de  hasta
 *   tres cifras  y  muestre un mensaje indicando si tiene 1, 2, ó 3 cifras.
 *  Mostrar un mensaje de error si el número de cifras no es 1, 2 ó 3.
 */
let num = 0;

num = parseInt(prompt("Introduzca un número positivo de hasta 3 cifras"));


if (num > 999){
    alert("El número introducido es incorrecto");
}
else{
    if (num >= 0 && num <= 9){
        document.write("<h4>El número " + num + " tiene 1 cifra</h4>");
    }
    else if (num >= 10 && num <= 99){
        document.write("<h4>El número " + num + " tiene 2 cifras</h4>");
    }
    else if (num >= 100 && num <= 999){
        document.write("<h4>El número " + num + " tiene 3 cifras</h4>");
    }
}
"use-strict";
/**
 * 13.Se ingresa por  teclado un  número positivo de uno  o dos  dígitos (1..99)
 *  mostrar  un mensaje indicando si el número tiene uno o dos dígitos
 *  (recordar de convertir a entero con parseInt para preguntar posteriormente
 *  por una variable entera). Tened en cuenta qué condición debe cumplirse para
 *  tener dos dígitos, un número entero.
 */
let num = 0;

num = parseInt(prompt("Introduzca un número de una o dos cifras"));

if (num >= 0 && num <= 9){
    document.write("<h4>El número " + num + " tiene una cifra</h4>");
}
else if (num >= 10 && num <= 99){
    document.write("<h4>El número " + num + " tiene dos cifras</h4>");
}
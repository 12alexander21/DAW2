"use-strict";
/**
 * 19.Escribir un programa que pida ingresar la coordenada de un punto
 *  en el plano, es decir dos valores enteros x e y.
 *  Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto.
 */
let x = 0, y = 0;
let cuadrante = "";

document.write("<br><h3>Búsqueda de cuadrante</h3><hr>");

x = parseInt(prompt("Introduzca la coordenada X"));
y = parseInt(prompt("Introduzca la coordenada Y"));

if (x > 0 && y > 0){
    cuadrante = "Primer cuadrante";
}
else if (x < 0 && y > 0){
    cuadrante = "Segundo cuadrante";
}
else if (x < 0 && y < 0){
    cuadrante = "Tercer cuadrante";
}
else if (x > 0 && y < 0){
    cuadrante = "Cuarto cuadrante";
}

document.write("<h4>Número de cuadrante: " + cuadrante + "</h4>")
"use-strict";
/**
 * 16.De un postulante a un empleo que realizó un test de capacitación,
 *  se obtuvo la siguiente información: nombre del postulante, cantidad
 *  total de preguntas que se le realizaron y cantidad de preguntas que
 *  contestó correctamente.
 */
let nombre = "";
let numPreguntas = 0;
let numCorrectas = 0;
let porcentaje = 0;

nombre = prompt("Introduzca el nombre del postulante");
numPreguntas = parseInt(prompt("Introduzca el número de preguntas realizadas"));
numCorrectas = parseInt(prompt("Introduzca el número de preguntas que contesto correctamente"));

porcentaje = (numCorrectas * 100) / numPreguntas;

document.write("<br><h3>Test de capacitación</h3><hr>");
document.write("<h4>Nombre: " + nombre + "</h4>");
document.write("<h4>Numero de preguntas: " + numPreguntas + "</h4>");
document.write("<h4>Respuestas correctas: " + numCorrectas + "</h4>");
document.write("<h4>Nivel: ");

if (porcentaje < 50){
    document.write("Fuera de nivel</h4>");
}
else if (porcentaje >= 50 && porcentaje < 75){
    document.write("Nivel regular</h4>");
}
else if (porcentaje >= 75 && porcentaje < 90){
    document.write("Nivel medio</h4>");
}
else if (porcentaje >= 90){
    document.write("Nivel superior</h4>");
}
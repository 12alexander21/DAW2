"use-strict";
/**
 * 11.Confeccionar el siguiente código:
 * a.Se  ingresan  tres  notas  de  un  alumno,  si  el  promedio es  mayor
 *   o  igual  a  siete mostrar  el  mensaje 'Promocionado'.
 *  Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3;
 *  y luego hacer promedio=suma/3;
 * b.Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son
 *  iguales (tener en cuenta que para ver si dos variables tienen el mismo valor
 *  almacenado debemos utilizar el operador ==).
 */
let notas = [];
let promedio = 0;

document.write("<br><h3>Cálculo de notas</h3><hr>");

notas[0] = String(prompt("Introduzca la primera nota"));
notas[1] = String(prompt("Introduzca la segunda nota"));
notas[2] = String(prompt("Introduzca la última nota"));

promedio = ((Number(notas[0]) + Number(notas[1]) + Number(notas[2])) / 3);

document.write("<h4>Notas > " + notas[0] + " | " + notas[1] + " | " + notas[2] + "</h4>");
document.write("<h4>Nota media > " + Math.round(promedio) + "</h4>");

if (promedio >= 7) 
    document.write("<h4>¡Promocionado!</h4>");
/******************************************************************************************** */

let clave = "";

document.write("<br><h3>Comprobación de clave</h3><hr>");

clave = prompt("Introduzca una clave");

if (clave == prompt("Repita la misma clave")){
    document.write("<h4>Las claves son iguales</h4>");
}
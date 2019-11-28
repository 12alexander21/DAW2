"use-strict";
/**
 * 17.Realizar un programa que pida cargar una fecha cualquiera y luego
 *  verificar si dicha fecha corresponde a Navidad
 */
let fecha = "";
const fechaNavidad = new Date(2019, 11, 25);

document.write("<br><h3>Fecha de Navidad</h3><hr>");

fecha = prompt("Introduzca una fecha con el siguiente formato: dd/mm/aaaa");

if (fecha == fechaNavidad.toLocaleDateString("en-GB")){
    document.write("<h4>La fecha introducida corresponde a la fecha de Navidad</h4>")
}
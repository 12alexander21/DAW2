"use-strict";
/**
 * 20.De un operario se conoce su sueldo y los años de antigüedad.
 *  Se pide confeccionar un programa que lea los datos de entrada e informe
 */
let sueldo = 0 ;
let antiguedad = 0;
let cambioSueldo = "";

document.write("<br><h3>Aumento de sueldo</h3><hr>");

sueldo = parseInt(prompt("Introduzca el sueldo"));
antiguedad = parseInt(prompt("Introduzca el número de años de antiguedad"));

if (sueldo < 500 && antiguedad >= 10){
    cambioSueldo = "Aumento de un 20 %";
    sueldo *= 1.20;
}
else if (sueldo < 500 && antiguedad < 10){
    cambioSueldo = "Aumento de un 5 %";
    sueldo *= 1.05;
}
else if (sueldo >= 500){
    cambioSueldo = "No hay ningun aumento";
}

document.write("<h4>Sueldo > " + cambioSueldo + "</h4>");
document.write("<h4>Sueldo actual > " + sueldo + "</h4>");
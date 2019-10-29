"use-strict";

let sueldos = [];
let sueldo = 0;
let mayoresSueldos = 0;
let menoresSueldos = 0;
let sueldoTotal = 0;

document.write("<br><h3>Sueldo de los empleados</h3><hr>");

for (let cadaSueldo = 0; cadaSueldo < 5; cadaSueldo++) {
    sueldo = prompt("Sueldo del empleado Nº " + (cadaSueldo + 1));
    if (isNaN(sueldo) || sueldo.length == 0){
        alert("Valor incorrecto");
    }
    else if (sueldo < 100 || sueldo > 500){
        alert("El sueldo introducido debe estar entre 100 y 500");
    }
    else{
        sueldos.push(parseInt(sueldo));
    }
}

for (let empleado = 0; empleado < sueldos.length; empleado++) {
    if (sueldos[empleado] >= 100 && sueldos[empleado] <= 300){
        menoresSueldos++;
    }
    else { //if (sueldo > 300)
        mayoresSueldos++;
    }
    sueldoTotal += sueldos[empleado];
}
document.write("<p>Número de empleados con sueldo entre 100 y 300 > <b>" + menoresSueldos + "</b></p>");
document.write("<p>Número de empleados con sueldo mayor de 300 > <b>" + mayoresSueldos + "</b></p>");
document.write("<p>Gasto en sueldos > <b>" + sueldoTotal + " €</b></p>");
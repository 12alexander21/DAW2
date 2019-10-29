"use-strict";

let notas = [];
let nota = 0;
let mayoresSiete = 0;
let menoresSiete = 0;

document.write("<br><h3>Múltiplos de 8</h3><hr>");

for (let cadaNota = 0; cadaNota < 10; cadaNota++) {
    nota = prompt("Nota del alumno " + (cadaNota + 1));
    if (isNaN(nota) || nota.length == 0){
        alert("Valor incorrecto");
    }
    else if (nota < 0 || nota > 10){
        alert("La nota introducida debe estar entre 0 y 10");
    }
    else{
        notas.push(nota);
    }
}

for (let alumno = 0; alumno < notas.length; alumno++) {
    if (notas[alumno] >= 7){
        mayoresSiete++;
    }
    else{
        menoresSiete++;
    }
}
document.write("<p>Número de alumnos con notas superiores o iguales a 7 > <b>" + mayoresSiete + "</b></p>");
document.write("<p>Número de alumnos con notas inferiores a 7 > <b>" + menoresSiete + "</b></p>");
'use strict';
/**
 * Realizar un programa que pida la carga de dos vectores numéricos.
 * Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. 
 * Sumar componente a componente. El tamaño del vector es a elección.
 */

let vector1 = Array(3);
let vector2 = Array(3);
let vectorSuma = Array(3);

document.write("<h3>Suma de vectores</h3><hr>");

for (let i = 0; i < vector1.length; i++) {
    vector1[i] = prompt(`Introduce un número (${i + 1}/${vector1.length})`);
    if (isNaN(vector1[i])){
        alert("El valor introducido no es un número");
    }
    else{
        vector1[i] = parseInt(vector1[i]);
    }
    
    vector2[i] = prompt(`Introduce un número (${i + 2}/${vector2.length})`);
    if (isNaN(vector2[i])){
        alert("El valor introducido no es un número");
    }
    else{
        vector2[i] = parseInt(vector2[i]);
    }
}

vectorSuma = sumaVectores(vector1, vector2);

document.write(`<p>La suma de los vectores con valor <b>${vector1}</b> y <b>${vector2}</b> es igual a <b>${vectorSuma}</b></p>`);

function sumaVectores(vector1, vector2) {
    let array = []
    for (let i = 0; i < vector1.length; i++) {
        array[i] = vector1[i] + vector2[i]
    }
    return array;
}
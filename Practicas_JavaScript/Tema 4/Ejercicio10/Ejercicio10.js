/**
 * Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe: 
 * - El valor acumulado de todos los elementos del vector.
 * - El valor acumulado de los elementos del vector que sean mayores a 36.
 * - Cantidad de valores mayores a 50.
 */

let vector = Array(8);

document.write("<h3>Cálculo de vector</h3><hr>");

for (let i = 0; i < vector.length; i++) {
    vector[i] = prompt(`Introduce un número (${i + 1}/${vector.length})`);
    if (isNaN(vector[i])){
        alert("El valor introducido no es un número");
    }
    else{
        vector[i] = parseInt(vector[i]);
    }
}

document.write(`<p>Valor acumulado de todos los elementos > <b>${valorAcumulado(vector)}</b><br>
                Valor acumulado de los elementos mayores a 36 > <b>${valorMayor36(vector)}</b><br>
                Cantidad de valores mayores a 50 > <b>${cantidadMayor50(vector)}</b></p>`);


function valorAcumulado(vector) {
    return vector.reduce((suma, valor) => suma + valor);
}

function valorMayor36(vector) {
    let suma = 0;
    vector.forEach((valor) => { if (valor > 36) suma += valor });
    return suma;
}

function cantidadMayor50(vector) {
    let cantidad = 0;
    vector.forEach((valor) => { if (valor > 50) cantidad += 1});
    return cantidad;
}
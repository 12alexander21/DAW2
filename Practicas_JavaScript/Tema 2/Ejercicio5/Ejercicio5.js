"use-strict";
/**
 * El cálculo de la letra del Documento Nacional de Identidad (DNI) es un
 *  proceso matemático sencillo que se basa en obtener el resto de la división
 *  entera del número de DNI y el número 23. A partir del resto de la división,
 *  se obtiene la letra seleccionándola dentro de un array de letras
 */
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numDNI; //Variable donde almacenaremos el numero del DNI
let letraDNI; //Variable donde almacenaremos la letra del DNI
let resulResto; //Variable para almacenar la letra calculada con la operacion
numDNI = prompt("Introduzca el DNI sin la letra")

if (numDNI > 0 || numDNI < 99999999){
    letraDNI = prompt("Introduzca la letra de su DNI");
    resulResto = numDNI % 23;
    if (letras[resulResto] == letraDNI){
        alert("El número y la letra del DNI son correctos");
    }
    else{
        alert("La letra indicada no es correcta");
    }
}
else{
    alert("El número proporcionado no es válido");
}

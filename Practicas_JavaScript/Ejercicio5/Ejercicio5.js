"use-strict";

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numDNI;
let letraDNI;
let resulResto;
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

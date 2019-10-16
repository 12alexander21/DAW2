"use-strict";

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numDNI;
let letraDNI;
let resulResto;
numDNI = prompt()

if ((numDNI > 0 || numDNI < 99999999)){
    letraDNI = prompt();
    resulResto = numDNI % 23;
    if (letraDNI[resulResto] == letraDNI){
        alert("El número y la letra del DNI son correctos");
    }
    else{
        alert("La letra indicada no es correcta");
    }
}
else{
    alert("El número proporcionado no es válido");
}

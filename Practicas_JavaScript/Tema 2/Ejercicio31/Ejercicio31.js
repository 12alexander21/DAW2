"use-strict";

let num = 0;
let numPorTeclado = 0;

document.write("<br><h3>Comparación con cero</h3><hr>");

while (true){
    numPorTeclado = prompt("Introduzca un número");
    if (isNaN(numPorTeclado)){
        alert("Valor incorrecto");
    }
    else {
        numPorTeclado = parseInt(numPorTeclado);
        if (numPorTeclado === 9999) { break; }
        num += numPorTeclado;
    }
}

if (num > 0){
    document.write("<p>El valor total del número es mayor de cero</p>");
}
else if (num === 0){
    document.write("<p>El valor total del número es igual a cero</p>")
}
else {
    document.write("<p>El valor total del número es menor de cero</p>")
}

document.write("<p>Resultado > <b> " + num + " </b></p>");
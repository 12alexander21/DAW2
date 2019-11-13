"use-strict";

let lista1 = [], lista2 = [];
let sumLista1 = 0, sumLista2 = 0;
let num1 = 0, num2 = 0;


document.write("<br><h3>Comparación de listas</h3><hr>");

for (let i = 0; i < 3; i++) {
    num1 = parseInt(prompt("Número "+ (i + 1) + " de la primera lista"));    
    if (num1.toString.length !== 0){
        lista1[i] = num1;
        sumLista1 += num1;
    }
    else {
        alert("Número no introducido");
    }
}

for (let i = 0; i < 3; i++) {
    num2 = parseInt(prompt("Número "+ (i + 1) + " de la segunda lista"));    
    if (num2.toString.length !== 0){
        lista2[i] = num2;
        sumLista2 += num2;
    }
    else{
        alert("Número no introducido");
    }
}

if (sumLista1 === sumLista2){
    document.write("<p>Ambas listas son iguales</p>");
}
else if (sumLista1 >= sumLista2){
    document.write("<p>La primera lista es mayor que la segunda</p>");
}
else {
    document.write("<p>La segunda lista es mayor que la primera</p>");
}
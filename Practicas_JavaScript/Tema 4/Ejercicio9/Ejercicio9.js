'use strict'; 
/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
 * es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 */

let cadena = ""; let cadena2 = "";

document.write("<h3>Cadena palíndroma</h3><hr>");

cadena = prompt("Introduzca una cadena");

document.write(`<p>La cadena ${palindromo(cadena)}`);


function palindromo(cadena) {
    let texto = "";

    if (cadena.toLowerCase().replace(/\s/g, '') === cadena.toLowerCase().split('').reverse().join('').replace(/\s/g, '')){
        texto = `<b>${cadena}</b> es palíndroma</p>`;
    }
    else{
        texto = `<b>${cadena}</b> no es palíndroma</p>`;
    }

    return texto;
}
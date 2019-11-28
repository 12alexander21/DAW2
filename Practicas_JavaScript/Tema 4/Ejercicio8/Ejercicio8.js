'use strict';
/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por
 * mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */
let cadena = "";

document.write("<h3>Detección del formato de cadena</h3><hr>");

cadena = prompt("Introduzca una cadena de texto");

document.write(`La cadena ${cadena} está formada ${verFormato(cadena)}`)


function verFormato(cadena) {
    let resultado = "";

    if (/^[A-Z]*$/.test(cadena)){
        resultado = "solo por mayúsculas";
    }
    else if (/^[a-z]*$/.test(cadena)){
        resultado = "solo por minúsculas";
    }
    else resultado = "tanto por mayúsculas como por minúsculas";
    if (/^\d*$/.test(cadena))
    return resultado
}
"use-strict";
/**
 * 21.Solicitar el ingreso de alguna de estas palabras (casa, mesa, perro, gato)
 *  luego mostrar la palabra traducida al inglés.
 *  Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
 */
let palabra = "";

document.write("<br><h3>Traducción al inglés</h3><hr>");

palabra = prompt("Introduzca casa, mesa, perro o gato");

document.write("<h4>Palabra introducida > " + palabra + "</h4>")

switch (palabra) {
    case "casa":
        palabra = "house";
        break;
    case "mesa":
        palabra = "table";
        break;
    case "perro":
        palabra = "dog";
        break;
    case "gato":
        palabra = "cat";
        break;
    default:
        alert("La palabra introducida no es correcta");
        break;
}

document.write("<h4>Palabra traducida > " + palabra + "</h4>")
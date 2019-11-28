"use-strict";
/**
 * Realizar un programa que lee una calificación numérica entre 0 y 10 y
 *  la transforma en calificación alfabética, escribiendo el resultado
 */
let nota = Number(prompt("Introduzca el número con la que realizar la operación"));
let result = "";

switch (nota) {
    case 0: case 1: case 2:
        result = "MD";
        break;
    case 3: case 4:
        result = "INS";
        break;
    case 5:
        result = "SUF";
        break;
    case 6:
        result = "BIE";
        break;
    case 7: case 8:
        result = "NOT";
        break;
    case 9: case 10:
        result = "SOB";
        break;
}
alert(result);
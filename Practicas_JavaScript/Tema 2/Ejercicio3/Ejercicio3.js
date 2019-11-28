"use-strict";
/**
 * A partir del siguiente array que se proporciona:var valores = [true, 5, false, "hola", "adios", 2];
 * 1.Determinar cuál de los dos elementos de texto es mayor
 * 2.Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
 *  necesarios para obtener un resultado true y otro resultado false
 * 3.Determinar el resultado de las cinco operaciones matemáticas realizadas
 *  con los dos elementos numéricos.
 */
let valores = [true, 5, false, "hola", "adios", 2];
let longitudMayor = 0; //Guarda la longitud de la cadena más larga del array
let textoMayor
let numeroA = 0, numeroB = 0;

for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'string' && valores[i].length > longitudMayor){
        longitudMayor = valores[i].length;
        textoMayor = valores[i];
    }
}
document.write("<h2>Texto mayor</h2><hr>");
document.write("<h3> La cadena más larga es " + textoMayor.toUpperCase() + " y tiene una longitud de " + longitudMayor + " caracteres</h3>");

/*****************************************************************************************/

/*for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'boolean' && )
}*/


/*****************************************************************************************/

for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'number' && numeroA == 0){
        numeroA = valores[i];
    }
    else{
        numeroB = valores[i];
    }
}
document.write("<h2>Operaciones matemáticas</h2><hr>");
document.write("<h3>Suma: " + numeroA + " + " + numeroB + " = " + (numeroA + numeroB) + "</h3>");
document.write("<h3>Resta: " + numeroA + " - " + numeroB + " = " + (numeroA - numeroB) + " </h3>");
document.write("<h3>Multiplicación: " + numeroA + " x " + numeroB + " = " + (numeroA * numeroB) + " </h3>");
document.write("<h3>División: " + numeroA + " / " + numeroB + " = " + (numeroA / numeroB) + "  </h3>");
document.write("<h3>Resto: " + numeroA + " % " + numeroB + " = " + (numeroA % numeroB) + "  </h3>");
'use strict';
/**
 * Plantear una clase persona (que permita cargar por teclado su nombre y edad). Por otro lado crear una clase
 * empresa que tenga como atributos el nombre y la edad tope para que una persona pueda ingresar como
 * trabajador en la misma.
 * Confeccionar en la página HTML un pequeño programa en JavaScript que defina 3 objetos de la clase persona
 * y 1 de la clase empresa. Mostrar cuántas de esas personas están inhabilitadas para ingresar como
 * trabajadores.
 */

document.write("<h3>Creación y uso de clases 2</h3><hr>");

let cantidad = 0;

empresa = new empresa();

let p1 = new persona();
let p2 = new persona();
let p3 = new persona();

if (empresa.puedeTrabajar(p1)){
    cantidad++;
}
if (empresa.puedeTrabajar(p2)){
    cantidad++;
}
if (empresa.puedeTrabajar(p3)){
    cantidad++;
}

switch (cantidad) {
    case 0:
        document.write(`<p>Nadie puede trabajar en la empresa</p>`);
        break;
    case 1:
        document.write(`<p>Puede trabajar en la empresa <b>${cantidad}</b> persona</p>`);
        break;
    case 2:
    case 3:
        document.write(`<p>Pueden trabajar en la empresa <b>${cantidad}</b> personas</p>`)
        break;


    
}

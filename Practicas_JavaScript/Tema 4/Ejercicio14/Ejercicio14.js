'use strict';
/**
 * Confeccionar  una  clase  persona  que  permita  almacenar  el  nombre  y  la  edad.  
 * Luego  definir  un  vector  de  4 componentes de tipo persona. 
 * Imprimir el nombre de la persona de mayor edad; decir también si hay más de una persona con la edad mayor.
 */

document.write("<h3>Creación y uso de clases 3</h3><hr>");

let vector = [];
let resultado;

let p1 = new persona();
let p2 = new persona();
let p3 = new persona();
let p4 = new persona();

vector.push(p1);
vector.push(p2);
vector.push(p3);
vector.push(p4);

persona.rellenarDatos(vector);

resultado = persona.obtenerEdadMayor(vector);

if (Array.isArray(resultado)){
    document.write(`<p>El nombre de la persona con mayor edad es <b>${resultado[0].nombre}</b> pero ${resultado[1]}</p>`);
}
else{
    document.write(`<p>El nombre de la persona con mayor edad es <b>${resultado.nombre}</b></p>`);
}
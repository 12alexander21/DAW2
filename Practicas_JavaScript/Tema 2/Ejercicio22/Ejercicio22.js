"use-strict";
/**
 * 22.Realizar un programa que imprima 25 términos de la serie 11 -22 -33 -44, etc.
 *  (No se ingresan valores por teclado).
 *  Cuando se llegan a las trescifras la serie será de la forma 111, 222, 333, ...
 */
let aumento = 11; //Variable que suma a num
let cantidadAumento = 100; //Variable que incrementa a aumento en función de num
let num = 11; //Variable usada para la secuencia


document.write("<br><h3>Serie de números</h3><hr>");

document.write("<p>Serie > </p><b>")

for (let i = 0; i < 25; i++) {
    if (num.toString().length > aumento.toString().length){
        aumento += cantidadAumento;
        cantidadAumento *= 10;
        num += 1; //Hacemos esta operación para cuadrar la secuencia, ya que cuando al numero 99 le sumamos 11 da 110 en lugar de 111 como debería ser
    }

    document.write(num + "<br>")
    num += aumento;
    
}
document.write("</b>")
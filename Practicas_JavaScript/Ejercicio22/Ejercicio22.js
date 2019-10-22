"use-strict";

let aumento = 11; //Variable que suma a num
let cantidadAumento = 100; //Variable que incrementa a aumento en función de num
let num = 11; //Variable usada para la secuencia


document.write("<br><h3>Serie de números</h3><hr>");

document.write("<p>Serie > </p><b>")

for (let i = 0; i <= 134; i++) {
    if (num.toString().length > aumento.toString().length){
        aumento += cantidadAumento;
        cantidadAumento *= 10;
        num += 1; //Hacemos esta operación para cuadrar la secuencia, ya que cuando al numero 99 le sumamos 11 da 110 en lugar de 111 como debería ser
    }

    document.write(num + " ")
    num += aumento;
    
}
document.write("</b>")
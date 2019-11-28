"use-strict";
/**
 * En el mismo fichero, sabiendo que cuando desplazamos 1 bit a la derecha dividimos
 *  entre 2 y si lo desplazamos a la izquierda multiplicamos por 2, mostrar también
 *  el resultado de las siguientes operaciones:
 * ➢125  / 8 =
 * ➢40 x 4 =
 * ➢25 / 2 =
 * ➢10 x 16 = 
 */
document.write("<table border=20%>");
document.write("<tr>");
document.write("<th>TABLA DE MULTIPLICAR DEL 7</th>");
document.write("<th>TABLA DE MULTIPLICAR DEL 8</th>");
document.write("<th>TABLA DE MULTIPLICAR DEL 9</th>");
document.write("<th></th>");
document.write("</tr>");
document.write("");


for (let i = 1; i <= 10; i++) {
    siete = 7;
    ocho = 8;
    nueve = 9;
    document.write("<tr>");
    document.write("<td> 7 x " + i + " = " + i * siete + "</td>");
    document.write("<td> 8 x " + i + " = " + i * ocho + "</td>");
    document.write("<td> 9 x " + i + " = " + i * nueve + "</td>");
    document.write("<td></td>")
    document.write("</tr>");
}


document.write("</table>");

document.write("<br>");

document.write("<table>");
document.write("<tr><tr>");
document.write("<td></td>");
document.write("<td>" + "<b> 125 / 8 con desplazamiento de bits </b>" + "<br>" + (125 >> 3) + "</td>");
document.write("<td>" + "<b> 40 x 4 con desplazamiento de bits </b>" + "<br>" + (40 << 2) + "</td>");
document.write("</tr></tr>");
document.write("<tr><tr>");
document.write("<td></td>");
document.write("<td>" + "<b> 25 / 2 con desplazamiento de bits </b>" + "<br>" + (25 >> 1) + "</td>");
document.write("<td>" + "<b> 10 x 16 con desplazamiento de bits </b>" + "<br>" + (10 << 4) + "</td>");
document.write("</tr></tr>");
document.write("</table>");
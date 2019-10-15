"use-strict";

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
document.write("<td>" + "125 / 8 con desplazamiento de bits" + "<br>" + (125 >> 3) + "</td>");
document.write("<td>" + "40 * 4 con desplazamiento de bits" + "<br>" + (40 << 2) + "</td>");
document.write("</tr></tr>");
document.write("<tr><tr>");
document.write("<td></td>");
document.write("<td>" + "40 * 4 con desplazamiento de bits" + "<br>" + (40 << 2) + "</td>");
document.write();
document.write("</tr></tr>");
document.write("</table>");
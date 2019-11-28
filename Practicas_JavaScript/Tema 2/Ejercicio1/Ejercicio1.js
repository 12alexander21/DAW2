"use-strict";
/*
 *Realizar una pequeña aplicación JavaScript que muestre las tablas de multiplicar del 7, 8 y 9
  usando los tres tipos de bucles vistos. La  idea es representar las tablas de multiplicar en
   forma  de tabla web con  cuatro  columnas dejando la cuarta libre.
  */ 
document.write("<table>");
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
    document.write("<td> 9 x " + i + " = " + i * nueve + "</td>")
    document.write("</tr>");
}


document.write("</table>");
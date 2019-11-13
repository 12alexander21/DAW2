"use-strict";

let base = Array(3);
let altura = Array(3);
let superficie = Array(3);
let granSuperficie = 0;

document.write("<br><h3>Cálculos con triángulos</h3><hr>");

for (let i = 0; i < base.length; i++) {
    base[i] = parseInt(prompt("Introduzca la base del triángulo número " + (i + 1) + " de " + base.length));
    altura[i] = parseInt(prompt("Introduzca la altura del triángulo número " + (i + 1) + " de " + base.length));
    superficie[i] = (base[i] * altura[i]) / 2;
    if (superficie[i] > 12){
        granSuperficie++;
    }
    document.write("<p>Base del triángulo " + (i + 1) + " > <b> " + base[i] + " </b></p>");
    document.write("<p>Altura del triángulo " + (i + 1) + " > <b> " + altura[i] + " </b></p>");
    document.write("<p>Superficie del triángulo " + (i + 1) + " > <b> " + superficie[i] + " </b></p>");
}


document.write("<p>Cantidad de triángulos con superficie mayor a 12 > <b> " + granSuperficie + " </b></p>");
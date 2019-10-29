"use-strict";

let alturas = [];
let altura = 0;
let promedio = 0;

document.write("<br><h3>Altura promedio</h3><hr>");

for (let cadaAltura = 0; cadaAltura < 5; cadaAltura++) {
    altura = prompt("Altura en cm | Persona Nº " + (cadaAltura + 1));
    if (isNaN(altura)){
        alert("Valor incorrecto");
    }
    else if (altura < 0 || altura > 250){
        alert("La altura introducida debe estar entre 0 y 250 centímetros");
    }
    else{
        alturas.push(parseInt(altura));
    }
}

for (let valor = 0; valor < alturas.length; valor++) {
    promedio += alturas[valor];
}
promedio /= alturas.length;

document.write("<p>La altura promedio es > <b>" + promedio + "</b> centímetros.</p>");
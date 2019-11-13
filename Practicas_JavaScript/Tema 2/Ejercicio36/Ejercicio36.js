"use-strict";

let lados = Array(3);
let menorTriangulo = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
let tipoTriangulo = Array(4);
let triangulos = [
    [lados],
    [lados],
    [lados],
    [lados]
];
let tipoTrianguloMenor = "";
let cantidadTriangulos = [0,0,0];

document.write("<br><h3>Triángulos</h3><hr>");

document.write("<p>Tipos de triángulos > ");
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < lados.length; j++) {
        triangulos[i][j] = parseInt(prompt("Lado número " + (j + 1) + " del triángulo " + (i + 1)));        
    }
    if (i === 0) menorTriangulo = triangulos[i];

    if (triangulos[i][0] === triangulos[i][1] && triangulos[i][1] === triangulos[i][2]){
        tipoTriangulo[i] = 'Equilátero';
    }
    else if(triangulos[i][0] !== triangulos[i][1] && triangulos[i][1] !== triangulos[i][2]){
        tipoTriangulo[i] = 'Isósceles';
    }
    else{
        tipoTriangulo[i] = 'Escaleno';
    }
    document.write("<b>" + tipoTriangulo[i] + "</b> ");

    if (triangulos[i] < menorTriangulo){
        menorTriangulo = triangulos[i];
        tipoTrianguloMenor = tipoTriangulo[i];
    }
}
document.write("</p>");

for (let i = 0; i < tipoTriangulo.length; i++) {
    if (tipoTriangulo[i] === 'Equilátero') cantidadTriangulos[0]++;
    else if (tipoTriangulo[i] === 'Isósceles') cantidadTriangulos[1]++;
    else cantidadTriangulos[2]++;
}

document.write("<p>Hay <b>" + cantidadTriangulos[0] + "</b> triángulo/s equiláteros</p>");
document.write("<p>Hay <b>" + cantidadTriangulos[1] + "</b> triángulo/s isósceles</p>");
document.write("<p>Hay <b>" + cantidadTriangulos[2] + "</b> triángulo/s escalenos</p>");
document.write("<p>El tipo del triángulo de menor cantidad es <b>" + tipoTrianguloMenor + "</b></p>")

console.info(triangulos);
console.log(menorTriangulo);
console.log(tipoTrianguloMenor)
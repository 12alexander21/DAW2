"use-strict";

let promedioEdades = Array(3);
let turnoManana = Array(50);
let turnoTarde = Array(60);
let turnoNoche = Array(110);
const edadMin = 18, edadMax = 35;

document.write("<br><h3>Promedio de edades</h3><hr>");

for (let i = 0; i < turnoManana.length; i++) {
    turnoManana[i] = calcularEdad(edadMin, edadMax);
}
for (let i = 0; i < turnoTarde.length; i++) {
    turnoTarde[i] = calcularEdad(edadMin, edadMax);
}
for (let i = 0; i < turnoNoche.length; i++) {
    turnoNoche[i] = calcularEdad(edadMin, edadMax);
}
promedioEdades[0] = parseFloat(calcularPromedio(turnoManana));
promedioEdades[1] = parseFloat(calcularPromedio(turnoTarde));
promedioEdades[2] = parseFloat(calcularPromedio(turnoNoche));

document.write("<p style='font-size: 18px'>Promedio de edades:</p>");
document.write("<p>Turno de mañana > <b>" + promedioEdades[0] + "</b> años</p>");
document.write("<p>Turno de tarde > <b>" + promedioEdades[1] + "</b> años</p>");
document.write("<p>Turno de noche > <b>" + promedioEdades[2] + "</b> años</p>");

promedioMayor(promedioEdades);

/*------------------------------ Funciones -----------------------------------*/
function calcularEdad(edadMin, edadMax) {
    return Math.floor(Math.random() * (edadMax - edadMin)) + edadMin
}

function calcularPromedio(turno){
    let promedio = 0;
    promedio = turno.reduce((suma, valor) => suma + valor);
    return Math.round((promedio / turno.length) * 100) / 100;
}

function promedioMayor(promedios){
    if (promedios[0] > promedios[1] && promedios[0] > promedios[2]){
        document.write("<p>El promedio de edades del turno de mañana es mayor</p>");
    }
    else if (promedios[1] > promedios[2] && promedios[1] > promedios[0]){
        document.write("<p>El promedio de edades del turno de tarde es mayor</p>");
    }
    else{
        document.write("<p>El promedio de edades del turno de noche es mayor</p>");
    }
}
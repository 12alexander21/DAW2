"use-strict";
/**
 * 33. Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo.
 *  De cada una de las personas censadas se tiene la siguiente información: número de documento,
 *  edad y sexo ('femenino' o * 'masculino').
 */
let numeroDocumento = "", edad = 0, sexo = ""; //Variables para comprobar el valor introducido
let totalPersonas = 0, totalVarones = 0, totalMujeres = 0, totalAdultos = 0; //Suma total del saldo
let dniReg = RegExp(/^\d{8}[A-Z]$/);
let noIntroducir = false;

document.write("<br><h3>Censo provincial</h3><hr>");

while(true){
    //#region DNI
    numeroDocumento = prompt("Introduzca el DNI");
    if (numeroDocumento === "0") break;

    while (!dniReg.test(numeroDocumento)){
        if (numeroDocumento === "0"){
            noIntroducir = true;
            break;
        } 
        numeroDocumento = prompt("Introduzca un DNI correcto");
    }
    if (noIntroducir) break;
    //#endregion
    //#region Edad
    edad = prompt("Introduzca la edad");
    if (!isNaN(edad)){
        if (edad <= 0){
            edad = "Edad errónea";
        }
        else{
            edad = parseInt(edad);
        }
    }
    //#endregion
    //#region Sexo
    sexo = prompt("Introduzca el sexo");
        
    if (sexo === "masculino"){
        if (edad >= 16 && edad <= 65){
            totalAdultos++;
        }
        totalVarones++;
    }
    else if (sexo === "femenino"){
        totalMujeres++;
    }
    else sexo = "No especificado";
    //#endregion
    totalPersonas++;

}

document.write("<p>Cantidad total de personas censadas > <b> " + totalPersonas + " </b></p>");
document.write("<p>Cantidad total de varones > <b> " + totalVarones + " </b></p>");
document.write("<p>Cantidad total de mujeres > <b> " + totalMujeres + " </b></p>");
document.write("<p>Cantidad total de varones entre 16 y 65 años > <b> " + totalAdultos + " </b></p>");
"use-strict";
/**
 * 32. En un banco se procesan datos de las cuentas corrientes de sus clientes.
 *  De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual.
 *  El ingreso de datos debe finalizar al ingresar un valor negativo
 * en el número de cuenta.
 */
let nombre = "", saldo = 0, numeroCC = 0; //Variables para comprobar el valor introducido
let numerosCuentas = [], nombresClientes = [], saldos = []; //Arrays para almacenar los datos
let sumaSaldo = 0; //Suma total del saldo

document.write("<br><h3>Estados de cuentas</h3><hr>");

do {
    numeroCC = prompt("Introduzca un número de cuenta (Para salir introduzca número negativo");
    if (isNaN(numeroCC)){
        alert("El valor introducido no es válido");
        numeroCC = "No definido";
    }
    else {
        numeroCC = parseInt(numeroCC);
    }
    if (numeroCC < 0) break;
    nombre = prompt("Introduzca el nombre del cliente");
    saldo = prompt("Introduzca el saldo de la cuenta");
    if (isNaN(saldo)){
        alert("El valor introducido no es válido");
        saldo = 0;
    }
    else {
        saldo = parseInt(saldo);
    }

    numerosCuentas.push(numeroCC);
    nombresClientes.push(nombre);
    saldos.push(saldo);

    numeroCC = undefined;
    nombre = undefined;
    saldo = undefined;

} while (true);

document.write("<table border='1'>");
document.write("<th>Número de cuenta<th>Nombre del cliente<th>Saldo<th>Estado de la cuenta</th></th></th></th>");

for (let i = 0; i < numerosCuentas.length; i++) {
    document.write("<tr><td>" + numerosCuentas[i] + "</td>");
    document.write("<td>" + nombresClientes[i] + "</td>");
    document.write("<td>" + saldos[i] + "</td>");
    document.write("<td>");
    if (saldos[i] > 0){
        document.write("Acreedor");
    }
    else if (saldos[i] === 0){
        document.write("Nulo");
    }
    else {
        document.write("Deudor");
    }
    document.write("</td></tr>");

    sumaSaldo += saldos[i];
}
document.write("</table>");
document.write("<p>La suma total de los saldos es <b> " + sumaSaldo + " </b>euros</p>");
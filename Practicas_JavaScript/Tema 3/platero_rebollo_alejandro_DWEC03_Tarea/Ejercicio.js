
let nuevaVentana
let nombreCompleto, nombre;
let fecha = new Date();

function llamada() {
    let java;

    nuevaVentana = window.open('','target = _blank' , 'popup resizable=0 width=650, height=500');

    if (navigator.javaEnabled()) {
        java = "Java SI disponible en esta ventana";
    } else {
        java = "Java NO disponible en esta ventana";
    }
    nuevaVentana.document.write(`<h3>Ejemplo de ventana nueva</h3><br>
                                URL Completa: ${location.href.toString()}<br>
                                Protocolo utilizado: ${location.protocol.toString()}<br>
                                Nombre en código del navegador: ${navigator.appCodeName.toString()}<br>
                                ${java}<br>
                                <iframe src="https://www.google.es" height="800" width="600"></iframe>`);
}
document.write("<h1>TAREA DWEC03</h1><hr>");
nombreCompleto = prompt("Introduzca su nombre y apellidos");
nombre = nombreCompleto.split(" ", 1).toString();
fecha.setDate(parseInt(prompt("Introduzca DIA de nacimiento")));
fecha.setMonth(parseInt(prompt("Introduzca MES de nacimiento")) - 1);
fecha.setFullYear(parseInt(prompt("Introduzca AÑO de nacimiento")));

document.write(`Buenos dias <b>${nombre}</b><br>
                Tu nombre tiene ${nombre.length} caracteres, incluidos espacios<br>
                La primera letra A de tu nombre está en la posición: ${nombre.indexOf("a")}<br>
                La última letra A de tu nombre está en la posición: ${nombre.lastIndexOf("a")}<br>
                Tu nombre menos las 3 primeras letras es: ${nombre.substr(3)}<br>
                Tu nombre todo en mayúsculas es: ${nombre.toUpperCase()}<br>
                Tu edad es: ${obtenerEdad(fecha).toString()} años<br>
                Naciste un feliz ${fecha.toLocaleString('default', {month: 'long'})} del año ${fecha.getFullYear()}<br>
                El coseno de 180 es: ${Math.cos(180 * Math.PI / 180)}<br>
                El número mayor de (34,67,23,75,35,19) es: ${Math.max(...[34, 67, 23, 75, 35, 19])}<br>
                Ejemplo de número al azar: ${Math.floor((Math.random() * 100) + 1)}<br><br>`);


function obtenerEdad(fecha) {
    let diferenciaMs = Date.now() - fecha.getTime();
    let fechaAno = new Date(diferenciaMs);
    return Math.abs(fechaAno.getUTCFullYear() - 1970);
}
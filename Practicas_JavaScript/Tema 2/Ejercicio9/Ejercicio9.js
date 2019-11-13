"use-strict";

let usuario = "";
let mail = "";

usuario = prompt("Introduzca su nombre de usuario");

mail = prompt("Introduzca su email");

if (mail.includes("@") && mail.includes(".com")){
    document.write("<h3>Usuario = " + usuario + "</h3>");
    document.write("<h3>Email = " + mail + "</h3>");
}
else{
    alert("***ERROR*** El formato del email es incorrecto")
}


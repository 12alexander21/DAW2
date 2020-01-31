'use-strict';
/**************************************
 * Autor: Alejandro Platero Rebollo
 * Fecha creación:          26/11/2019
 * Última modificación:     13/12/2019
 * Versión: 1.0
 **************************************/
var agenda = {
    /**
     * @param listaPersonas Almacena las personas guardas
     */
    listaPersonas: [],
    /**
     * @param regNombreYApellidos Expresion regular que controla el input de los campos nombre y apellidos
     */
    regNombreYApellidos: RegExp(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,}$/),
    /**
     * @param regTelefono Expresion regular que controla el input del campo teléfono
     */
    regTelefono: RegExp(/^[67]\d{8}$/),
    /**
     * @param regFecha Expresion regular que controla el input del campo fecha
     */
    regFecha: RegExp(/^([012][1-9]|3[01])\/(0[1-9]|1[0-2])\/(\d|[1-9][0-9]|[1-9]\d{3})$/),
    /**
     * @param numEntrada Variable usada para acceder a distintas entradas de la lista de personas
     */
    numEntrada: 1,
    /**
     * @function inicio Inicia la aplicación
     */
    inicio: function () {
        var p1 = new persona();
        var p2 = new persona();
        var p3 = new persona();
        var p4 = new persona();
        
        this.datosEjemplo([p1, p2, p3, p4]);

        this.verDatos();

        var botones = document.querySelectorAll('.btn');
        for (const boton of botones ) {
            boton.addEventListener('click', function () {
                agenda.comprobarEntrada(boton);
            })
        }
        document.getElementById("guardarRegistro").disabled = true;
    },
    /**
     * @function getEntrada Obtiene la entrada introducida en el campo de texto de la esquina superior derecha
     */
    getEntrada: function () {        
        if (this.numEntrada >= 1 && this.numEntrada <= this.listaPersonas.length){    
            document.getElementById('cNombre').value = this.listaPersonas[this.numEntrada - 1].nombre;
            document.getElementById('cApellidos').value = this.listaPersonas[this.numEntrada - 1].apellidos;
            document.getElementById('cTelefono').value = this.listaPersonas[this.numEntrada - 1].telefono;
            document.getElementById('cFecha').value = this.listaPersonas[this.numEntrada - 1].fechaNac;

            document.getElementById("textoControles").innerHTML = `${this.numEntrada} de ${this.listaPersonas.length}`
        }
    },
    /**
     * @function verDatos Muestra todos los datos almacenados en la lista de personas
     */
    verDatos: function () {
        var tabla = document.getElementById("cuerpoTabla");
        var nuevaFila;
        var campo1, campo2, campo3, campo4;        
        
        if (this.listaPersonas.length > 0){

            if (tabla.childNodes.length !== 0){
                tabla.innerHTML = "";
            }
            for (let i = 0; i < this.listaPersonas.length; i++) {
                nuevaFila = tabla.insertRow(tabla.rows.length);

                campo1 = nuevaFila.insertCell(0);
                campo2 = nuevaFila.insertCell(1);
                campo3 = nuevaFila.insertCell(2);
                campo4 = nuevaFila.insertCell(3);
                campo5 = nuevaFila.insertCell(4);

                campo1.innerHTML = i + 1;
                campo2.innerHTML = this.listaPersonas[i].nombre;
                campo3.innerHTML = this.listaPersonas[i].apellidos;
                campo4.innerHTML = this.listaPersonas[i].telefono;
                campo5.innerHTML = this.listaPersonas[i].fechaNac;
            }
            document.getElementById("textoControles").innerHTML = `${this.numEntrada} de ${this.listaPersonas.length}`

        }
        else if (this.listaPersonas.length === 0){
            tabla.innerHTML = "";
        }
    },
    /**
     * @function datosEjemplo Carga los datos por defecto de la aplicación 
     * @param personas Array de personas
     */
    datosEjemplo: function (personas) {
        personas[0].nombre = "Pedro";
        personas[1].nombre = "Ana";
        personas[2].nombre = "Maximiliano";
        personas[3].nombre = "María";

        personas[0].apellidos = "Ecija Almenara";
        personas[1].apellidos = "Cartagena Varas";
        personas[2].apellidos = "Ramírez Sanchez";
        personas[3].apellidos = "González García";

        personas[0].telefono = "612345678";
        personas[1].telefono = "712345867";
        personas[2].telefono = "698751548";
        personas[3].telefono = "798765432";

        personas[0].fechaNac = "12/12/2012";
        personas[1].fechaNac = "01/05/1985";
        personas[2].fechaNac = "30/12/1964";
        personas[3].fechaNac = "23/08/1976";

        this.listaPersonas.push(personas[0]);
        this.listaPersonas.push(personas[1]);
        this.listaPersonas.push(personas[2]);
        this.listaPersonas.push(personas[3]);
    },
    /**
     * @function nuevaEntrada Permite añadir una nueva entrada
     */
    nuevaEntrada: function () {        
        document.getElementById("textoControles").innerHTML = "Nuevo";
        document.getElementById("guardarRegistro").disabled = false;
        document.getElementById("borrarRegistro").disabled = true;
    },
    /**
     * @function meterDatos Permite meter datos de una entrada
     */
    meterDatos: function (nombre, apellidos, telefono, fecha) {
        if ((nombre === "" || !this.regNombreYApellidos.test(nombre)) || (apellidos === "" || !this.regNombreYApellidos.test(apellidos))){
            alert("Debe introducir un nombre o apellidos correcto");
        }
        else if (telefono === "" || !this.regTelefono.test(telefono)){
            alert("Debe introducir un telefono con un formato correcto. Ej: 612345678");
        }
        else if (fecha === "" || !this.regFecha.test(fecha)){
            alert("Debe introducir una fecha con un formato correcto. Ej: 01/12/2000");
        }
        else{
            
            var p = new persona()
            this.listaPersonas.push(p);
            this.listaPersonas[this.listaPersonas.length - 1].nombre = nombre;
            this.listaPersonas[this.listaPersonas.length - 1].apellidos = apellidos;
            this.listaPersonas[this.listaPersonas.length - 1].telefono = telefono;
            this.listaPersonas[this.listaPersonas.length - 1].fechaNac = fecha;
            document.getElementById("cNombre").value = "";
            document.getElementById("cApellidos").value = "";
            document.getElementById("cTelefono").value = "";
            document.getElementById("cFecha").value = "";

            document.getElementById("guardarRegistro").disabled = true;
            document.getElementById("borrarRegistro").disabled = false;
        }
    },
    /**
     * @function borrarEntrada Permite borrar una entrada
     */
    borrarEntrada: function () {

        this.listaPersonas.splice(this.numEntrada - 1, 1);

        this.verDatos();

        if (this.numEntrada - 1 === this.listaPersonas.length){
            this.numEntrada--;
        } 

        document.getElementById("textoControles").innerHTML = `${this.numEntrada} de ${this.listaPersonas.length}`;

        if (this.listaPersonas.length === 0){
            document.getElementById("borrarRegistro").disabled = true;
        }
    
    },
    /**
     * @function comprobarEntrada Comprueba que botón de todos se han introducido
     */
    comprobarEntrada: function (boton) {
        switch (boton.innerText) {
            case "<<":
                this.numEntrada = 1;
                this.getEntrada(this.numEntrada);
                break;
        
            case "<":
                if (this.numEntrada >= 2) {
                    this.numEntrada--;
                    this.getEntrada(this.numEntrada);
                }
                break;
                
            case ">":
                if (this.numEntrada !== this.listaPersonas.length) {
                    this.numEntrada++;
                    this.getEntrada(this.numEntrada);
                }
                break;
            case ">>":
                this.numEntrada = this.listaPersonas.length;
                this.getEntrada(this.numEntrada);
                break;
            case "Ver":
                this.numEntrada = document.getElementById("entrada").value;
                this.getEntrada(this.numEntrada);
                break;
            case "Guardar":
                var nombre =  document.getElementById("cNombre").value;
                var apellidos =  document.getElementById("cApellidos").value;
                var telefono =  document.getElementById("cTelefono").value;
                var fecha =  document.getElementById("cFecha").value;

                this.meterDatos(nombre, apellidos, telefono, fecha);
                this.verDatos();
                break;
            case "Nuevo":
                this.nuevaEntrada();
                break;
            case "Borrar":
                this.borrarEntrada()
                break;
        }
    }
}

/**
 * @function carga Función llamada cuando el body del html ha cargado
 */
function carga() {
    agenda.inicio();
}

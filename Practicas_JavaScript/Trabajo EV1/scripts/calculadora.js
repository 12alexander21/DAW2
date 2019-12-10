'use strict';
/**************************************
 * Autor: Alejandro Platero Rebollo
 * Fecha creación:          21/11/2019
 * Última modificación:     xx/xx/xxxx
 * Versión: XX.XX
 **************************************/
/**
 * @param ans Almacena el valor de la ultima operación
 * @param numero Almacena el valor del primer número introducido
 * @param numero2 Almacena el valor del segundo número introducido
 * @param operacion Almacena la operacion a realizar deseada
 * @function setNumero Agrega los números a las variables
 * @function setOperacion 
 */
var calculadora = {
    ans: 0, 
    numero: 0,
    numero2: 0,
    operacion: "",

    inicio: function () {
        for (let i = 0; i < document.getElementById('teclas').childNodes.length; i++) { //recorremos todos los elementos hijos
            if (i % 2 !== 0){ //Solo permitimos los elementos impares porque los pares no contienen el id de las teclas

                for (let j = 0; j < document.getElementById('teclas').childNodes[i].childNodes.length; j++) {
                    if (j % 2 !== 0){ //Solo permitimos los elementos impares porque los pares no contienen el id de las teclas
                        document.getElementById(document.getElementById('teclas').childNodes[i].childNodes[j].id).addEventListener('click', function () { click(document.getElementById('teclas').childNodes[i].childNodes[j].innerHTML) });
                    }   
                }

            }
        }
    },

    setNumero: function (valor) {
        this.numero = parseFloat(this.numero + valor.toString());
        document.getElementById('pantalla').innerHTML = this.numero;
    },

    setNumero2: function (valor) {
        this.numero2 = parseFloat(this.numero2 + valor.toString());
        document.getElementById('pantalla').innerHTML = this.numero2;
    },

    setOperacion: function (operando) {
        this.operacion = operando;
        document.getElementById('pantalla').innerHTML = this.operacion;
    },

    realizarOperacion: function () {
        switch (this.operacion) {
            case "+":
                if (this.ans === 0){
                    this.ans = this.numero + this.numero2;
                }
                else{
                    this.ans += this.numero;
                }
                this.numero2 = 0;
                document.getElementById('pantalla').innerHTML = this.ans;
                break;
            case "-":
                if (this.ans === 0){
                    this.ans = this.numero - this.numero2;
                }
                else{
                    this.ans -= this.numero;
                }
                this.numero2 = 0;
                document.getElementById('pantalla').innerHTML = this.ans;
            break;
            case "x":
                if (this.ans === 0){
                    this.ans = this.numero * this.numero2;
                }
                else{
                    this.ans *= this.numero;
                }
                this.numero2 = 0;
                document.getElementById('pantalla').innerHTML = this.ans;
            break;
            case "/":
                if (this.ans === 0){
                    if (this.numero2 === 0){
                        document.getElementById('pantalla').innerHTML = "Error";
                    }
                    else{
                        this.ans = this.numero / this.numero2;
                        this.numero2 = 0;
                        document.getElementById('pantalla').innerHTML = this.ans;
                    }
                    
                }
                else{
                    if (this.numero === 0){
                        document.getElementById('pantalla').innerHTML = "Error";
                    }
                    else{
                        this.ans /= this.numero;                        
                        this.numero = 0;
                        document.getElementById('pantalla').innerHTML = this.ans;
                    }                    
                }
            break;
            case "%":
                if (this.numero !== 0 && this.numero2 !== 0){
                    this.numero2 /= 100;
                    this.ans = this.numero * this.numero2;
                    document.getElementById('pantalla').innerHTML = this.ans;
                }
                break;
            case "√":
                if (isNaN(document.getElementById('pantalla').innerHTML)){
                    document.getElementById('pantalla').innerHTML = "Error";
                }
                else{
                    this.ans = parseFloat(document.getElementById('pantalla').innerHTML);
                    this.ans = Math.sqrt(this.ans);
                    document.getElementById('pantalla').innerHTML = this.ans;
                }
                break;
            case "1/x":
                if (isNaN(document.getElementById('pantalla').innerHTML)){
                    document.getElementById('pantalla').innerHTML = "Error";
                }
                else{
                    this.ans = parseFloat(document.getElementById('pantalla').innerHTML);             
                    this.ans = 1 / this.ans;
                    document.getElementById('pantalla').innerHTML = this.ans;
                }
                break;
            case "±":
                if (isNaN(document.getElementById('pantalla').innerHTML)){
                    document.getElementById('pantalla').innerHTML = "Error";
                }
                else{
                    this.ans = parseFloat(document.getElementById('pantalla').innerHTML);             
                    this.ans *= -1;
                    document.getElementById('pantalla').innerHTML = this.ans;
                }
                break;
            case "←":
                console.log(document.getElementById('pantalla').innerHTML);
                this.ans = parseInt(this.numero.toString().substr(0,this.numero.toString().length - 1,));
                document.getElementById('pantalla').innerHTML = this.ans;
                break;
            case "CE":
                document.getElementById('pantalla').innerHTML = 0;
                break;
            case "C":
                this.ans = 0;
                this.numero = 0;
                this.numero2 = 0;
                this.operacion = "";
                document.getElementById('pantalla').innerHTML = 0;
                break;
            case ".":
                this.ans = parseFloat(document.getElementById('pantalla').innerHTML + ",");
                document.getElementById('pantalla').innerHTML = this.ans + ".";
                break;
            default:                
                break;
        }
    },

    comprobarEntrada: function(valor) {
        let operInstantaneas = ["±", "√" , ".", "1/x", "←", "CE", "C"]
        console.log(Number("1/x"));
        if (!isNaN(Number(valor)) && this.operacion === ""){
            this.setNumero(Number(valor));
        }
        else if (!isNaN(Number(valor)) && this.operacion !== ""){
            this.setNumero2(Number(valor));
        }
        else if (operInstantaneas.includes(valor)){
            this.operacion = valor;
            this.realizarOperacion();
        }
        else if (valor === "="){
            this.realizarOperacion();
        }
        else{
            this.setOperacion(valor);   
        }
    }
}

function carga() {
    calculadora.inicio()
}


function click(valor) {
    calculadora.comprobarEntrada(valor);

}
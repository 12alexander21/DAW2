class suma {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }
    cargarvalor1(valor) {
        this.valor1 = valor;
    }
    cargarvalor2(valor) {
        this.valor2 = valor;
    }
    retornarresultado() {
        return this.valor1 + this.valor2;
    }
}
class bombo {
  constructor() {
    this.bombo = [];
    this.historial = [];
  }

  devolverNumero() {
    let num = this.bombo.pop();
    this.historial.push(num);
    return num;
  }

  devolverHistorial() {
    return this.historial;
  }
}

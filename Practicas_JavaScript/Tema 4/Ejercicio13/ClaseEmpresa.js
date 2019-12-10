class empresa {
    constructor() {
        this.nombreEmpre = "MiEmpresa S.L.";
        this.edadTope = 70;
    }
    puedeTrabajar(persona) {
        if (persona.edad >= this.edadTope)  return false;
        else return true;
    }
}
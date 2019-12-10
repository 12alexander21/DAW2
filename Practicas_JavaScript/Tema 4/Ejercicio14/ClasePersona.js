class persona {
    constructor(){
        this.nombre = "";
        this.edad = 0;
    }

    static rellenarDatos(personas){
        for (let i = 0; i < personas.length; i++) {
            personas[i].nombre = prompt("Introduzca el nombre de la persona");
            personas[i].edad = Number(prompt("Introduzca la edad de la persona"));
        }
    }

    static obtenerEdadMayor(personas){
        let edadMayor = Number.MIN_VALUE;
        let personaEdadMayor = new persona();
        let edadesIguales = false;
        let texto = "hay más de una persona con la edad mayor";

        for (let i = 0; i < personas.length; i++) {
            
            if (personas[i].edad > edadMayor){
                personaEdadMayor = personas[i];
                edadMayor = personaEdadMayor.edad;
            }
            else if (personas[i].edad === edadMayor){
                edadesIguales = true;
            }
            
        }
        if (edadesIguales) return [personaEdadMayor, texto]
        else return personaEdadMayor;
    }
}
const { Maestro } = require("./Maestro")

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones,nombre, edad) {
        super(materia, calificaciones,nombre)
        this.edad = edad
    }
}
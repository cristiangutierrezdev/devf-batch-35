const { Maestro } = require("./Maestro")

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, nombre, antiguedad) {
        super(materia, calificaciones, nombre)
        this.antiguedad = antiguedad
    }
}


let Carlos = new MaestroMusica("Musica", [2.5, 3, 1, 2], "Carlos", 5)

console.log(Carlos.calcularPromedio())
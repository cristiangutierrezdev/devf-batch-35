class Maestro {
    constructor(materia, calificaciones, nombre) {
        this.materia = materia
        this.calificaciones = calificaciones
        this.nombre = nombre
    }
    calcularPromedio(){
        let suma = 0
        let resultado = 0
        for (let index = 1; index < this.calificaciones.length; index++) {
            suma = suma + this.calificaciones[index]
        }
        resultado = suma / this.calificaciones.length
        return resultado
    }
}

module.exports = { Maestro }


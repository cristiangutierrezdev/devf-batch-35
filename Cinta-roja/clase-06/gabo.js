const express = require("express")
let app = express()
let puerto = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())​

app.get("/api", (request, response) => {
    let respuesta = {
        "resultado": "hola mundo"
    }
    response.status(200).send(respuesta)
})​
app.post("/api/suma", (request, response) => {
    let suma = request.body.num1 + request.body.num2
    let respuesta = {
        "resultado": suma
    }
    response.status(200).send(respuesta)
})​
app.get("/api/validar", (request, response) => {
    let edad = request.body.edad
    console.log(request.body.edad)
    if (edad >= 18) {
        response.status(200).send("Es mayor de edad")
    } else {
        response.status(200).send("Niño, le voy a decir a su mamá que está buscando PORNO!")
    }
})​​​
app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
})
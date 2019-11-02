// console.log("1")
// console.log("2")

// setTimeout(function () {

//     console.log("Datos")
// }, 5000)

// setTimeout(function () {

//     console.log("Datos2")
// }, 1000)

// console.log("3")




// function peticion() {
//     const users = [
//         {
//             name: "Cristian",
//             id: 1
//         },
//         {
//             name: "Carlos",
//             id: 2
//         },
//         {
//             name: "Gabo",
//             id: 3
//         }
//     ]
//     return users
// }


// function getUsers (funcion){

//     let datos = funcion() 
//     return datos 
// }

// // console.log(getUsers(peticion))


// function showName(name){
//     return name
// }

// function showLastName(lastName){
//     return lastName
// }


// function getFullName ( isName, isLastName){
//     let name = showName(isName)
//     let lastName = showLastName(isLastName)

//     return console.log(`${name} ${lastName}`) 
// }

// getFullName("Cristian", "Gutierrez")






// function suma(a, b) {
//     let suma = a + b
//     return console.log(suma)
// }

// // suma(2,5)

// function activadora(funcion, a,b) {
//    return funcion(a,b)
// }

// activadora(suma, 2, 4)



// function maquina(moneda) {
//     if (moneda === 500) {
//         return console.log("Chocorramo")
//     } else {
//         return console.log("Se necesitan 500");
//     }
// }

// maquina("500")













// function maquina(moneda, producto) {
//     if (moneda === 500 && producto === "Chocorramo") {
//         return console.log("Chocorramo")
//     } else if (moneda === 1000 && producto === "Pollo") {
//         return console.log("Pollo")
//     } else {
//         return console.log("Error")
//     }
// }


// maquina(1000, "Pollo")


function suma(a, b) {
    let suma = a + b
    return console.log(suma)
}

function myFunction(unaFuncion, otroDato) {
    unaFuncion(a, b)
}

myFunction(suma, 5, 8)
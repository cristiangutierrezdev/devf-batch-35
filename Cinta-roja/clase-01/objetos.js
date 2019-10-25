// let ayudanteDeSanta = {
//   color: "Café",
//   patas: 4,
//   dueño: "Bart Simpson",
//   pulgas: true,
//   ladrar: function() {
//     return "Gua Gua";
//   },
//   comer() {
//     return "ñam ñam";
//   }
// };

// // console.log(ayudanteDeSanta);

// ayudanteDeSanta.nombre = "Ayudante de Santa";

// ayudanteDeSanta.correr = function() {
//   return "run run";
// };

// console.log(ayudanteDeSanta.correr());


// Objetos Literales
// -----------------------------------------------------------------------
// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
//     https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)

// -----------------------------------------------------------------------
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
// -----------------------------------------------------------------------
/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/
// -----------------------------------------------------------------------
// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.
// -----------------------------------------------------------------------
// */
// -----------------------------------------------------------------------
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
//     consola el mismo mensaje que escribimos para la bienvenida.
//     Esta vez, emplea la palabra reservada "this" para resolverlo.
// -----------------------------------------------------------------------
// */

const myPenguin = {
  nombre: "Pinguino",
  color: "negro",
  pico: "amarillo"
}

// console.log("Hola soy un pinguino y mi nombre es " + myPenguin.nombre); ---> Javascript 5
console.log(`Hola soy un pinguino y mi nombre es ${myPenguin.nombre}`); //  ---> ECMAScript 6

myPenguin.puedeVolar = false

console.log(myPenguin.puedeVolar);

let hola = "Cualquier cosa"

myPenguin.graznar = function (x){
  return console.log(x);
}
myPenguin.graznar(hola)

myPenguin.saludar = function () {
  return console.log(`Hola soy ${this.nombre}`);
}
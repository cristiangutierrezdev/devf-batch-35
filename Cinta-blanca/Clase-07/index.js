const data = [4, "Hola", true, NaN]

// console.log(data[1]);

const numeros = [12, 23, 90, 47, 67];
// numeros[4]

let num = 0
for (let index = 0; index < numeros.length; index = index + 1) {
    if (numeros[index] > num) {
        num = numeros[index]
        console.log(num);
    }
}

let titulo = document.getElementById("titulo")
console.log(titulo);

// npx create-react-app nombre-de-mi-proyecto
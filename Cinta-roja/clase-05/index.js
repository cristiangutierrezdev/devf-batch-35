const request = require("request")
let baseURL = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function getAllUsers() {
    return new Promise(function(resolve, reject) {
        request.get(baseURL, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

// getAllUsers()

function getUser(id) {
    return new Promise(function(resolve, reject) {
        request.get(`${baseURL}${id}`, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

let user = ""

// getUser(2105)
//     .then(function(newUser) {
//         user = newUser
//         console.log(user);
//     }).catch(function(err) {
//         console.log(err);
//     })

function createUser(datos) {
    return new Promise(function(resolve, reject) {
        request.post(baseURL, { form: datos }, function(error, response, body) {
            if (error) {
                reject(error)
            } else {
                resolve(JSON.parse(body))
            }
        })
    })
}

let newUser = {
    name: "Cristian",
    last_name: "Gutierrez",
    nacionalidad: "MX",
    biography: "Cualquier Cosa",
    gender: "M",
    age: 25
}

createUser(newUser)
    .then(function(user) {
        console.log("Primera");
        return getUser(user.id)
    }).then(function(user) {
        console.log("Segunda");
        return getAllUsers()
    }).then(function(users) {
        console.log("Tercera");
    }).catch(function(error) {
        console.log(error);
    })
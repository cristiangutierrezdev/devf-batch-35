const request = require("request")

let getUserUrl = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/3203/"

request.get(getUserUrl, function(error, response, body) {
    if (!error) {
        console.log(body);
    }
})
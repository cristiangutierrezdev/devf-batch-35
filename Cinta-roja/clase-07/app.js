const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const { User } = require("./models/index")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/api/v1/create/user", (request, response) => {
    const data = {
        name: request.body.name,
        last_name: request.body.last_name,
        age: request.body.age,
        gender: request.body.gender
    }
    const newUser = User(data)
    newUser.save((err, user) => {
        if (err) {
            response.status(409).send(err)
        } else {
            response.status(201).send(user)
        }
    })

})

app.get("/api/v1/get/user/:userid", (request, response) => {
    const id = request.params.userid
    User.findById(id, (err, user) => {
        if (err) {
            response.status(404).send(err)

        } else {
            response.status(200).send(user)
        }
    })
})


app.listen(PORT, (err) => {
    console.log(`Server in port  ${PORT}`);
})
const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const port = 3001

const users = []

app.post("/api/user/", (request, response) => {

    if(users.find(newUser => newUser.username === request.body.username)){
        response.status(409).send("error: user already exists")
    } else {
        request.body.userIDNumber = Math.floor(Math.random() * 333666999);
        users.push(request.body);
        response.status(201).send(request.body);
    }
})

app.listen(port);
// Importando o express
const express = require("express")

// Criando uma aplicação Express
const app = express()

// Configurando a porta que será usada na aplicação
const port = 8000

// Iniciando a aplicação
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

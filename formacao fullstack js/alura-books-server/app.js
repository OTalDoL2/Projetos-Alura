// Importando o express
const express = require("express")
const bookRoute = require("./routes/books.js")

// Criando uma aplicação Express
const app = express()
app.use(express.json())

// Configurando a porta que será usada na aplicação
const port = 8000

// Iniciando a aplicação
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/livros', bookRoute)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

// Importando o express
const express = require("express")
const bookRoute = require("./routes/books.js")
const cors = require("cors")

// Criando uma aplicação Express
const app = express()
app.use(express.json())
app.use(cors({origin : "*"}))

// Configurando a porta que será usada na aplicação
const port = 8000

app.use('/livros', bookRoute)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

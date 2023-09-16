// fs = File System, ferramenta para manipular arquivos
const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync('books.json'))
const novoDado = { id: '3', name: 'Livro 03' }

// cria uma nova lista com todos os itens da constante "dadosAtuais" e incrementa o objeto da constante "novoDado"
const novoObjeto = [...dadosAtuais, novoDado]

console.log("Objeto inicial: ")
console.log(JSON.parse(fs.readFileSync('books.json')))

fs.writeFileSync('books.json', JSON.stringify(novoObjeto))

console.log("Objeto final: ")
console.log(JSON.parse(fs.readFileSync('books.json')))
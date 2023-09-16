const fs = require('fs')

function getAllBooks(){
    console.log(JSON.parse(fs.readFileSync('books.json')))
    return JSON.parse(fs.readFileSync('books.json'))
}

module.exports = { 
    getAllBooks
}
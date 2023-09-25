const fs = require('fs')

function getAllBooks(){
    console.log(JSON.parse(fs.readFileSync('books.json')));
    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id){
    const books = JSON.parse(fs.readFileSync('books.json'));
    const filteredBook = books.filter( book => book.id === id )[0]
    return filteredBook
}

function insertBook(newBook){
    const books = JSON.parse(fs.readFileSync('books.json'));
    // Esses 3 pontos, conhecidos como spread, são utilizados para representar os dados encontrados na lista
    const newBooksList = [...books, newBook]
    fs.writeFileSync("books.json", JSON.stringify(newBooksList))
}

module.exports = { 
    getAllBooks,
    getBookById,
    insertBook
}
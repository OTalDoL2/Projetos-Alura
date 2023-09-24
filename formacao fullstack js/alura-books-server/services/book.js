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

module.exports = { 
    getAllBooks,
    getBookById
}
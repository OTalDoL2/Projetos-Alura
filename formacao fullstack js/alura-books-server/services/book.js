const fs = require('fs')

function readBooks() {
    return JSON.parse(fs.readFileSync('books.json'));
}

function writeOnJson(content){
    fs.writeFileSync("books.json", JSON.stringify(content));
}

function getAllBooks(){
    const books = readBooks();
    console.log(books);
    //  JSON.parse(fs.readFileSync('books.json'));
    return books;
}

function getBookById(id){
    // const books = JSON.parse(fs.readFileSync('books.json'));
    const books = readBooks();
    const filteredBook = books.filter( book => book.id === id )[0]
    return filteredBook
}

function insertBook(newBook){
    // const books = JSON.parse(fs.readFileSync('books.json'));
    const books = readBooks();
    // Esses 3 pontos, conhecidos como spread, são utilizados para representar os dados encontrados na lista
    const newBooksList = [...books, newBook]
    // fs.writeFileSync("books.json", JSON.stringify(newBooksList))
    writeOnJson(newBooksList)
}

function modifyBook(modification, id){
    let actualBooks = readBooks();
    const modifyIndex = actualBooks.findIndex(book => book.id === id);

    const changedContent = { ...actualBooks[modifyIndex], ...modification };
    
    actualBooks[modifyIndex] = changedContent;


    
    // fs.writeFileSync("books.json", actualBooks);
    writeOnJson(actualBooks);
}

function deleteBookById(id){
    const books = readBooks();
    const filteredBook = books.filter( book => book.id !== id );
    writeOnJson(filteredBook);


}

module.exports = { 
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook, 
    deleteBookById
}
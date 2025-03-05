const fs = require('fs')

function readBooks() {
    return JSON.parse(fs.readFileSync('books.json'));
}

function readFavorites() {
    console.log('lÊ')
    return JSON.parse(fs.readFileSync('favorites.json'));
}

function writeOnJson(content){
    fs.writeFileSync("favorites.json", JSON.stringify(content));
}

function getAllFavorites() {
    
    return readFavorites();

}

function deleteFavoriteById(id){
    const books = readFavorites();

    const filteredBooks = books.filter( book => book.id !== id )
    writeOnJson(filteredBooks)
    // fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

function insertBookInFavorite(id){
    console.log('nenhum')
    const books = readBooks();
    console.log('readBooks')
    const favorites = readFavorites();
    console.log('readFav')
    // JSON.parse(fs.readFileSync("favorites.json"))
    console.log("books")
    console.log(books)
    const newFavoriteBook = books.find( book => book.id == id)
    const updatedList = [...favorites, newFavoriteBook]
    fs.writeFileSync("favorites.json", JSON.stringify(updatedList))

}

module.exports = {
    getAllFavorites,
    deleteFavoriteById, 
    insertBookInFavorite
}
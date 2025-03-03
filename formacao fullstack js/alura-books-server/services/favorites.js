const fs = require('fs')

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json'));
}

function deleteFavoriteById(id){
    const books = JSON.parse(fs.readFileSync("favorites.json"))

    const filteredBooks = books.filter( book => book.id !== id )
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

function insertBookInFavorite(id){
    const books = JSON.parse(fs.readFileSync("books.json"))
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))

    const newFavoriteBook = books.find( book => book.id == id)
    const updatedList = [...favorites, newFavoriteBook]
    fs.writeFileSync("favorites.json", JSON.stringify(updatedList))

}

module.exports = {
    getAllFavorites,
    deleteFavoriteById, 
    insertBookInFavorite
}
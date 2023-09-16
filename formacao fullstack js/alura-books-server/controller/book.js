const {getAllBooks} = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch(error) {
        res.status(500)
        res.response(error.message)
    }
}

function setBooks(req, res) {

}

module.exports = {
    getBooks, setBooks
}
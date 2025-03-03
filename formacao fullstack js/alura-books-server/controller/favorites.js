const { getAllFavorites, deleteFavoriteById, insertBookInFavorite } = require("../services/favorites")

function getFavorites(req, res) {
    try {
        const books = getAllFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function addInFavorites(req, res) {
    try {
        newBook = req.params.id
        insertBookInFavorite(id)
        res.status(201)
        res.send("Livro inserido aos favoritos!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function removeInFavorites(req, res) {
    try {
        const id = req.params.id

        if (id, Number(id)) {
            deleteFavoriteById(id)
            res.send("Removido com sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorites,
    addInFavorites,
    removeInFavorites
}
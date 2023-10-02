const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch(error) {
        res.status(500)
        res.response(error.message)
    }
}

function idVerification(id){
    if(id && Number(id))
        return true 
    else {
        return false
    }
}

function getBook(req, res) {
    try {

        const id = req.params.id;
        if (!idVerification(id)){
            res.status(422)
            res.send("Id inválido")
            return ""
        }
        const book = getBookById(id)
        res.send(book)
            
    } catch(error) {
        res.status(500)
        res.response(error.message)
    }
}

function postBook(req,res) {
    try {
        const newBook = req.body;
        insertBook(newBook);
        res.status(201); // Status 201 => objeto criado
        res.send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchBook(req, res) {
    try{
        const id = req.params.id;

        if (!idVerification(id)) {
            res.status(422)
            res.send("Id inválido")
            return ""
        }
        
        const body = req.body;
        modifyBook(body, id);
        res.send("Item modificado com sucesso!");

    } catch {
        res.status(500);
        res.send(error.message)
    }
}

function deleteBook(req, res){
    try{
        const id = req.params.id;
        if (!idVerification(id)) {
            res.status(422)
            res.send("Id inválido")
            return ""
        }
        deleteBookById(id);
        res.send("Item deletado com sucesso!");
        
    } catch {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getBooks, getBook, postBook, patchBook, deleteBook
}
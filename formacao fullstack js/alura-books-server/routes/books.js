const {Router} = require("express")
const {getBooks, getBook, postBook, patchBook, deleteBook} = require("../controller/book")

const router = Router()

router.get('/', getBooks)

// passa um item como id
router.get('/:id', getBook)

router.post('/', postBook)

// patch seria quando você passa um parametro através da url, e um json com o conteudo que será modificado
// diferente do put, que passaria um "id" na url e um novo json, para substituir
router.patch('/:id', patchBook)

router.delete('/:id', deleteBook)

module.exports = router

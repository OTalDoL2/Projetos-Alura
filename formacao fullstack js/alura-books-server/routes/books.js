const {Router} = require("express")
const {getBooks, getBook, postBook} = require("../controller/book")

const router = Router()

router.get('/', getBooks)

// passa um item como id
router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/', (req, res) => {
    res.send()
})

router.put('/', (req, res) => {
    res.send()
})

router.delete('/', (req, res) => {
    res.send()
})

module.exports = router

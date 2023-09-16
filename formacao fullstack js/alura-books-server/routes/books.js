const {Router} = require("express")
const {getBooks} = require("../controller/book")

const router = Router()

router.get('/', getBooks)

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo post")
})

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

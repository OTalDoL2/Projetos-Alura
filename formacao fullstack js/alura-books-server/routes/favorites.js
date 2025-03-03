const { Router } = require("express")
const { getFavorites, addInFavorites, removeInFavorites } = require("../controller/favorites")

const router = Router()

router.get('/', getFavorites)

router.post('/:id', addInFavorites)

router.delete('/:id', removeInFavorites)

module.exports = router
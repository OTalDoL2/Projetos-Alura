const {Router} = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("hey")
})

module.exports = router

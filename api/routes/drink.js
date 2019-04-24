const drinkController = require('../controllers/drink')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadImage')

router.get('/', drinkController.fetchDrinks)
router.post('/', upload.single('drink'), drinkController.createDrink)


module.exports = router
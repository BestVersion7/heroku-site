const drinkController = require('../controllers/drink')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadImage')
const verifyToken = require('../middleware/verifyToken')

router.get('/popular', drinkController.getPopularDrinks)
// router.get('/query', drinkController.getDrinkByGroup)

// testing here
router.get('/comment/:id', drinkController.getDrinkComments)
router.post('/comment/:id', verifyToken, drinkController.postDrinkComment)
// ends here

router.get('/', drinkController.getDrinks)
router.post('/', verifyToken, upload.single('drink'), drinkController.createDrink)
// router.delete('/', drinkController.deleteAll)
router.delete('/:id', verifyToken, drinkController.deleteOne)

router.put('/:id', verifyToken, drinkController.updateDrinkPopular)


module.exports = router
const drinkController = require('../controllers/drink')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadImage')

router.get('/popular', drinkController.getPopularDrinks)


// testing here
router.get('/:id', drinkController.getDrinkComments)
router.post('/:id', drinkController.postDrinkComment)
// ends here

router.get('/', drinkController.fetchDrinks)
router.post('/', upload.single('drink'), drinkController.createDrink)
// router.delete('/', drinkController.deleteAll)
router.delete('/:id', drinkController.deleteOne)

router.put('/:id', drinkController.updateDrinkPopular)


module.exports = router
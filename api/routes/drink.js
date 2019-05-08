const drinkController = require('../controllers/drink')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadImage')
const verifyToken = require('../middleware/verifyToken')

router.get('/popular', drinkController.getPopularDrinks)
// router.get('/query', drinkController.getDrinkByGroup)

// nested document for crud comments
router.get('/comments/:id', drinkController.getDrinkComments)
router.post('/comments/:id', verifyToken, drinkController.postDrinkComment)
// router.delete('/comments/:id', drinkController.deleteAllComments)
// in progress
router.delete('/comments/:id/:commentId', verifyToken, drinkController.deleteDrinkComment)
// ends here

router.get('/', drinkController.getDrinks)
router.post('/', verifyToken, upload.single('drink'), drinkController.createDrink)
// router.delete('/', drinkController.deleteAll)
router.delete('/:id', verifyToken, drinkController.deleteOne)

router.put('/:id', verifyToken, drinkController.updateDrinkPopular)


module.exports = router
const express = require('express')
const router = express.Router()
const GalleryController = require('../controllers/gallery')
const verifyToken = require('../middleware/verifyToken')

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({
    storage
})

router.get('/', GalleryController.FetchImages)
router.post('/login', GalleryController.LoginUser)  
router.post('/', upload.single('mkt'), GalleryController.PostNewImages)
router.post('/user', verifyToken, GalleryController.CreateUser)
router.delete('/:id', verifyToken, GalleryController.DeleteOne)
// router.delete('/', GalleryController.DeleteAll)

module.exports = router
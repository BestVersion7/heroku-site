const express = require('express')
const router = express.Router()
const GalleryController = require('../controllers/gallery')
const upload = require('../middleware/uploadImage')
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken, GalleryController.FetchImages)
router.post('/login', GalleryController.LoginUser)  
router.post('/', verifyToken, upload.single('dze'), GalleryController.PostNewImages)
router.post('/user',verifyToken, GalleryController.CreateUser)
router.delete('/:id', verifyToken, GalleryController.DeleteOne)
// router.delete('/', GalleryController.DeleteAll)

module.exports = router
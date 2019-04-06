const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const verifyToken = require('../middleware/verifyToken')
const upload = require('../middleware/uploadImage')

router.delete('/:id', verifyToken, upload.single('movie'), movieController.DeleteImage)

router.get('/', verifyToken, movieController.FetchAll)

//file verification is already in multer upload middleware
router.post('/', verifyToken, upload.single('movie'), movieController.UploadImage)

// router.delete('/', verifyToken, movieController.Deleteall)

module.exports = router
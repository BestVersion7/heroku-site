const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const upload = require('../middleware/uploadImage')
const verifyToken = require('../middleware/verifyToken')

router.delete('/:id', verifyToken, upload.single('movie'), movieController.DeleteImage)
router.get('/', verifyToken, movieController.FetchAll)
router.post('/', verifyToken, upload.single('movie'), movieController.UploadImage)
// router.delete('/', movieController.Deleteall)

module.exports = router
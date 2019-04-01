const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const upload = require('../middleware/uploadImage')

router.get('/', movieController.FetchAll)

router.post('/', upload.single('movie'), movieController.UploadImage)

router.delete('/', movieController.Deleteall)

module.exports = router
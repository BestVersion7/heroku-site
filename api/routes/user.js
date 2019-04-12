const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const userController = require('../controllers/user')
const upload = require('../middleware/uploadImage')

router.get('/', verifyToken, userController.user_all)
router.post('/signup', verifyToken, userController.signup_user)
router.post('/login', userController.login_user)

// router.delete('/delete', userController.clear_database)

//change profile picture
router.put('/:id', verifyToken, upload.single('picture'), userController.change_picture)

module.exports = router

const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const userController = require('../controllers/user')
const upload = require('../middleware/uploadImage')

router.post('/signup', userController.signup_user)
router.post('/login', userController.login_user)

router.get('/:username', verifyToken, userController.get_user)

// router.delete('/delete', userController.clear_database)
router.put('/:id', verifyToken, upload.single('picture'), userController.change_picture)

router.get('/', userController.user_all)

//testing
// router.post('/test', upload.single('picture'), userController.test_upload)

module.exports = router

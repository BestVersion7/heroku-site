const express = require('express')
const router = express.Router()
const User = require('../models/user')

const verifyToken = require('../middleware/verifyToken')
const userController = require('../controllers/user')

// router.get('/', userController.user_all)
router.post('/signup', userController.signup_user)
router.post('/login', userController.login_user)
router.get('/all', verifyToken, userController.user_all)
router.delete('/delete', verifyToken, userController.clear_database)

//testing
router.get('/get/:username', (req, res) => {
    User.find({username: req.params.username})
    .select("password")
    .then(item => {
        if(item.length<1) {
            return res.status(404).send('not found')
        }
        res.send(item)
    })
})
module.exports = router

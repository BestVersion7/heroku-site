const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const userController = require('../controllers/user')

router.get('/', userController.user_all)
router.post('/signup', userController.signup_user)
router.post('/login', userController.login_user)
router.get('/all', verifyToken, userController.user_all)
router.delete('/delete', verifyToken, userController.clear_database)

module.exports = router

// //find user first and delete by body
// router.delete('/signup', (req, res) => {
//     User.find({email: req.body.email}) 
//     .then(item => {
//         if(item.length<1) {
//             return res.status(404).send('no user')
//         } 
//         User.findOneAndDelete({email: req.body.email})
//         .then(item => res.send('success'))
//         .catch(err => res.send(err))
//     })
// })

// router.put('/:email', (req, res) => {
//     User.findOneAndUpdate({email: req.params.email}, {password: req.body.password})
//     .then(item => res.json({results: item}))
//     .catch(err => res.status(400).send(err.message))
// })

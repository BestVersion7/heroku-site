const express = require('express')
const router = express.Router()
const UserCommentController = require('../controllers/userComment')
const verifyToken = require('../middleware/verifyToken')


router.get('/', UserCommentController.fetchComments)

//username picture_url comment
router.post('/', verifyToken, UserCommentController.postComment)

//delete one comment
router.delete('/:id', verifyToken, UserCommentController.deleteOneComment)

// delete all
// router.delete('/', UserCommentController.deleteComment)
module.exports = router
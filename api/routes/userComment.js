const express = require('express')
const router = express.Router()
const UserCommentController = require('../controllers/userComment')

router.get('/', UserCommentController.fetchComments)

//username picture_url comment
router.post('/', UserCommentController.postComment)

module.exports = router
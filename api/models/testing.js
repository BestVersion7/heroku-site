const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    commentLink: {
        type: String
    },
    comment: {
        type: String
    }
})

module.exports = mongoose.model('comment', commentSchema)
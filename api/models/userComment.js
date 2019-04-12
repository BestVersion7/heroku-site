const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userCommentSchema = new Schema({
    username: {
        type: String
    },
    picture_url_thumbnail: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userComment', userCommentSchema)
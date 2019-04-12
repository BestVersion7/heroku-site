const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userCommentSchema = new Schema({
    username: {
        type: String,
        default: 'Anonymous'
    },
    picture_url_thumbnail: {
        type: String,
        default: 'https://res.cloudinary.com/crimson-flamingo/image/upload/v1554830981/0604%20dze/dze-1554830981202.jpg'
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
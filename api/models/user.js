const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    picture_id: {
        type: String,
        default: "1"
    },
    picture_url_thumbnail: {
        type: String,
        default: 'https://res.cloudinary.com/crimson-flamingo/image/upload/v1554830981/0604%20dze/dze-1554830981202.jpg'
    },
    picture_url_original: {
        type: String,
        default: 'https://res.cloudinary.com/crimson-flamingo/image/upload/v1554830981/0604%20dze/dze-1554830981202.jpg'
    }
})

module.exports = mongoose.model('user', userSchema)
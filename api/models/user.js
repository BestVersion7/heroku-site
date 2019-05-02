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
        default: 'https://res.cloudinary.com/crimson-flamingo/image/upload/c_scale,w_42/v1555079519/1104%20profile/picture-1555079520338.png'
    },
    picture_url_original: {
        type: String,
        default: 'https://res.cloudinary.com/crimson-flamingo/image/upload/c_scale,w_42/v1555079519/1104%20profile/picture-1555079520338.png'
    },
    email: {
        type: String,
        required: true,
        default: 'test@email.com'
    }
})

module.exports = mongoose.model('user', userSchema)
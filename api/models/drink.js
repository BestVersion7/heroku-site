const mongoose = require('mongoose')
const Schema = mongoose.Schema

// testing the models
const userCommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: 20
    },
    picture_url_thumbnail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String,
        required: true,
        maxlength: 300
    }
})

const drinkSchema = new Schema({
    name: {
        type: String,
        default: "wine"
    },
    drink_url_thumbnail: String,
    drink_url_original: String,
    ingredients: String,
    directions: String,
    date: {
        type: Date,
        default: Date.now
    },
    group: {
        type: String,
        default: "margaritas"
    },
    popular: {
        type: String,
        default: false
    },
    comments: [userCommentSchema]
})

module.exports = mongoose.model('drink', drinkSchema)
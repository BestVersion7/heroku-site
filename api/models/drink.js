const mongoose = require('mongoose')
const Schema = mongoose.Schema

// testing the models
const userCommentSchema = new Schema({
    username: {
        type: String,
        required: true
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
        required: true
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
    comment: [userCommentSchema]
})

module.exports = mongoose.model('drink', drinkSchema)
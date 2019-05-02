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
    ingredients: {
        type: String,
        default: 'red white wine'
    },
    directions: {
        type: String,
        default: 'Step 1: Purchase'
    },
    date: {
        type: Date,
        default: Date.now
    },
    redirect: {
        type: String,
        default: 'http://localhost:4000'
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
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    description: {
        type: String, 
        trim: true,
        default: "friends"
    },
    picture: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const gallerySchema = new Schema({
    Date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        default: 'testusername'
    },
    password: {
        type: String,
        default: 'testpassword'
    },
    gallery: [imageSchema]
})

module.exports = mongoose.model('gallery', gallerySchema)
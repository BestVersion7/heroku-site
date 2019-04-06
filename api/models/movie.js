const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String, 
        trim: true,
        default: "friends"
    },
    picture: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('movie', movieSchema)
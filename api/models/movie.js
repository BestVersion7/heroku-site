const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('movie', movieSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    name: {
        type: String,
        default: "wine"
    },
    drink_url_thumbnail: String,
    drink_url_original: String,
    video_url: String
})

module.exports = mongoose.model('drink', drinkSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    food: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        max: 300
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Product is singular will create plural name
module.exports = mongoose.model('food', foodSchema)
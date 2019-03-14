const express = require('express');
const router = express.Router();

//Food Router
const Food = require('../models/food');

//GET
router.get('/', (req, res, next) => {
    Food.find().then(items => res.json(items))
})

//POST
router.post('/', (req, res, next) => {
    const newFood = new Food({
        food: req.body.food,
        cost: req.body.cost
    })
    newFood.save()
    .then(item => res.json(item))
    .catch(err => res.status(400).send(err))
})

//DELETE
router.delete('/:id', (req, res, next) => {
    Food.findById(req.params.id)
        .then(item => item.remove().then(res.send('Success')))
        .catch(err => res.status(404).send('Cannot find ID'))
})

module.exports = router
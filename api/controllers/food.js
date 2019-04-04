const Food = require('../models/food')

exports.fetch_query_food = (req, res, next) => {
    Food.find(req.query)
    .then(item => res.send(item))
    .catch(err => res.send(err.message))
}

exports.fetch_params_food = (req, res, next) => {
    Food.find({food: req.params.food})
    .then(item => res.send(item))
    .catch(err => res.send(err.message))
}

exports.create_food = (req, res, next) => {
    Food.find({food: req.body.food})
    .then (item => {
        if(item.length>=1) {
            return res.status(409).send('Exists')
        }
        Food.create(req.body) 
        .then(() => res.send('Success'))
        .catch(err => res.status(500).send(err.message))
    })
}

exports.delete_food = (req, res, next) => {
    // Food.find({food: req.params.food})
    // .then(item => {
    //     if(item.length<1) {
    //         return res.status(404).send('not found')
    //     }
    //     Food.deleteOne({food: req.params.food})
    //     .then(item => res.send('success'))
    //     .catch(err => res.status(404).send('error'))
    // })
    Food.findByIdAndDelete(req.params.id)
    .then(item => res.send('Deleted'))
    .catch(err => res.status(404).send('not found'))
}

exports.delete_all = (req, res, next) => {
    Food.deleteMany()
    .then(res.send('Deleted all records'))
    .catch(err => res.status(500).send('server error'))
}
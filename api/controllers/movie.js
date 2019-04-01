const Movie = require('../models/movie')
const path = require('path')

exports.FetchAll = (req, res) => {
    Movie.find()
    // .select('picture')
    .then(item => res.send(item))
    .catch(err => res.status(404).send(err))
}

exports.UploadImage = (req, res) => {
    Movie.create({
        title: req.body.title,
        picture: req.file.path
    })
    .then(() => res.status(201).send('Successful Post!'))
    .catch(err => res.status(400).send(err))
}

exports.Deleteall = (req, res) => {
    Movie.deleteMany()
    .then(() => res.send('success'))
    .catch(err => res.send(err))
}

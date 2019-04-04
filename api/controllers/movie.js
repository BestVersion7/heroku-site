const Movie = require('../models/movie')
const fs = require('fs')

exports.FetchAll = (req, res) => {
    Movie.find()
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
    .then(() => res.send('deleted all records'))
    .catch(err => res.status(500).send(err))
}

exports.DeleteImage = (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(item => {
        if(item === null) {
            return res.status(500).send('fail')
        } else {
            res.status(204).send('deleted')
            fs.unlink(item.picture, err => {
                if(err) {
                    return
                }
            })
        }
    })
    .catch(() => res.status(500).send('failed'))
}

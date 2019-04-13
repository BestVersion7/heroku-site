const UserComment = require('../models/userComment')

exports.fetchComments = (req, res) => {
    UserComment.find()
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))
}

exports.postComment = (req, res) => {
    UserComment.create(req.body)
    .then(() => res.status(201).send('201 created'))
    .catch(err => res.status(404).send('404 bad response'))
}

exports.deleteOneComment = (req, res) => {
    UserComment.deleteOne({_id: req.params.id})
    .then(() => res.status(202).send('deleted one'))
    .catch(() => res.status(500).send('err'))
}

exports.deleteComment = (req, res) => {
    UserComment.deleteMany()
    .then(() => res.status(202).send('deleted all'))
    .catch(() => res.status(500).send('err'))
}


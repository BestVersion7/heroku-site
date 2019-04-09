const Gallery = require('../models/gallery')
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary').v2
const dataUri = require('../middleware/formatImage')
const jwt = require('jsonwebtoken')

exports.DeleteAll = (req, res) => {
    Gallery.deleteMany()
    .then(() => res.status(202).send('success'))
    .catch(() => res.status(500).send('err'))
}

//NEED DEBUGGING
exports.DeleteOne = (req, res) => {
    Gallery.updateOne({
        _id: "5cac0ec1f3990d5e9c5649d2"
    }, {
        $pull: {
            gallery: {
                _id: req.params.id
            }
        }
    })
    .then(item => res.status(202).send(item))
    .catch(err => res.status(500).send(err))
}

exports.CreateUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (hash) {
            Gallery.create({
                username: req.body.username,
                password: hash
            })
            .then(() => res.status(201).send('created'))
            .catch(err => res.status(500).send(err))
        }
    })  
}

exports.PostNewImages = (req, res) => {
    cloudinary.uploader.upload(
        dataUri(req).content,
        {
            folder: '0604 dze',
            public_id: `${req.file.fieldname}-${Date.now()}`
        },
        (err, results) => {
            if(results) {
                Gallery.updateOne({
                    _id: "5cac0ec1f3990d5e9c5649d2"
                }, {
                    $push: {
                        gallery: {
                            picture: results.secure_url
                        }
                    }
                })
                .then(() => res.status(201).send('success'))
                .catch(() => res.status(500).send('failed'))
            }
        }
    )
}

exports.LoginUser = (req, res) => {
    Gallery.findOne({username: req.body.username})
    .then(item => {
        if(!item) {
            return res.status(500).send('not found')
        } else {
            bcrypt.compare(req.body.password, item.password, (err, success) => {
                if (success) {
                    const token = jwt.sign(
                        {_id: item._id},
                        process.env.PRIVATE_KEY,
                        {expiresIn: "10m"}
                    )
                    return res.json({result: 'success', token})
                }
                // wrong password
                return res.status(500).send('err')
            })
        }
    })
    .catch(err => res.status(500).send(err))
}

exports.FetchImages = (req, res) => {
    Gallery.find()
    .select()
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))
}
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const formatImage = require('../middleware/formatImage')
const cloudinary = require('cloudinary').v2

exports.user_all = (req, res, next) => {
    User.find()
    .select("username picture_url_thumbnail picture_url_original")
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err.message))
}

exports.signup_user = (req, res, next) => {
    User.find({username: req.body.username})
    // username is taken
    .then(item => {
        if (item.length>=1) {
            return res.status(409).send('username exists')
        }
        // hash and salt password
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(hash) {
                User.create({
                    username: req.body.username,
                    password: hash
                })
                .then(item => res.status(201).send('Success'))
                .catch(err => res.status(500).send(err.message))
            }
        })
    })
}

exports.login_user = (req, res, next) => {
    User.findOne({username: req.body.username})
    .then(user => {
        // username is not in database
        if(!user) {
            return res.status(500).send('auth failed1')
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            // compare password then create token
            if(result) {
                const token = jwt.sign(
                    {
                        username: user.username,
                        picture_url_thumbnail: user.picture_url_thumbnail
                    },
                    process.env.PRIVATE_KEY,
                    {expiresIn: '10m'}
                )
                return res.json({
                    results: 'success',
                    token
                })
            }
            // Wrong password
            res.status(500).send('wrong authentication')
        })
    })
}

exports.clear_database = (req, res, next) => {
    User.deleteMany()
    .then(item => res.send('Deleted all records'))
}

exports.change_picture = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(item => {
        const file = formatImage(req).content
        cloudinary.uploader.upload(
            file,
            {
                folder: '1104 profile',
                public_id: `${req.file.fieldname}-${Date.now()}`,
                
            },
            (err, cb) => {
                if(cb) {
                    //transform to thumbnail
                    const transformThumbnail = cloudinary.url(
                        `${cb.public_id}.${cb.format}`,
                        {
                            height: 50,
                            width: 50,
                            crop: "scale"
                        }
                    )               
                    User.updateOne(
                        {_id: item._id},
                        {picture_url_thumbnail: transformThumbnail},
                        {picture_url_original: cb.secure_url}
                    )
                    .then(() => res.send('changed picture'))
                    .catch(() => res.status(404).send('404 picture'))
                }
            }
        )
    })
    .catch(err => res.status(500).send('bad request'))
}



exports.dummy = (req, res) => {
    res.send('good')
}

exports.get_user = (req, res) => {
    User.findOne({username: req.params.username})
    .select("picture_url_thumbnail")
    .then(item => {
        if(item !==null) {
            return res.send(item)
        } else {
            return res.status(500).send('500err')
        }
    })
    .catch(err => res.status(500).send('500err'))
}
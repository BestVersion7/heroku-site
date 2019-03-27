const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.user_all = (req, res, next) => {
    User.find()
    .select("username password")
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err.message))
}

exports.secret = (req, res, next) => {
    res.send("Exploding Kittens!")
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
            if(err) {return res.status(500).send('bcrypt hash err')}
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
            if(err) {
                return res.status(500).send('bcrypt compare err')
            }
            // compare password then create token
            if(result) {
                const token = jwt.sign(
                    {username: user.username},
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

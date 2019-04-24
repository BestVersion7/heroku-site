const Drinks = require('../models/drink')
const cloudinary = require('cloudinary').v2
const formatImage = require('../middleware/formatImage')

exports.fetchDrinks = (req, res) => {
    Drinks.find()
    .then(item => res.send(item))
    .catch(err => res.status(404).send(err))
}

exports.createDrink = (req, res) => {
    // console.log(formatImage(req))
    const file = formatImage(req).content
    cloudinary.uploader.upload(
        file,
        {
            folder: "2304 drinks",
            public_id: `${req.file.fieldname}-${Date.now()}`
        }
    )
    .then(drink => {
        const transformed = cloudinary.url(
            drink.public_id,
            {
                secure: true,
                height: 50,
                width: 50,
                scale: "crop"
            }
        )
        Drinks.create({
            name: req.body.name,
            drink_url_thumbnail: transformed,
            drink_url_original: drink.secure_url
        })
        .then(item => res.status(201).send(item))
        .catch(err => res.status(403).send(err))
    })
    .catch(err => res.status(500).send(err))
}
    
exports.deleteAll = (req, res) => {
    Drinks.deleteMany()
    .then(() => res.send('deleted all'))
    .catch(err => res.status(500).send(err))
}

exports.deleteOne = (req, res) => {
    Drinks.deleteOne({_id: req.params.id})
    .then(() => res.send(`deleted ${_id}`))
    .catch(err => res.status(500).send(err))
}

exports.updateOne = (req, res) => {
    // const file = formatImage(req).content
    // cloudinary.uploader.upload(
    //     file,
    //     {
    //         folder: "2304 drinks",
    //         public_id: `${req.file.fieldname} - ${Date.now()}`
    //     },
    // )
    // Drinks.updateOne(
    //     {_id: req.params.id},
    //     {drink_url_original: }
    // )
    // .then(item => res.send('udpated one'))
    // .catch(err => res.status(500).send(err))
}
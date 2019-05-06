const Drinks = require('../models/drink')
const cloudinary = require('cloudinary').v2
const formatImage = require('../middleware/formatImage')

exports.getDrinks = (req, res) => {
    Drinks.find(req.query)
    .select("name ingredients directions group drink_url_thumbnail drink_url_original")
    .then(item => res.send(item))
    .catch(err => res.status(404).send(err))
}

exports.createDrink = async (req, res) => {
    // console.log(formatImage(req))
    try {
        const file = formatImage(req).content
        const data = await cloudinary.uploader.upload(
            file,
            {
                folder: "030519 drinks",
                public_id: `${req.file.fieldname}-${Date.now()}`
            }
        )
        const transformed = await cloudinary.url(
            data.public_id,
            {
                secure: true,
                height: 50,
                width: 50,
                crop: "scale"
            }
        )
        const item = await Drinks.create({
            name: req.body.name,
            drink_url_thumbnail: `${transformed}.${data.format}`,
            drink_url_original: data.secure_url,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
            group: req.body.group,
            popular: req.body.popular,
        })
        res.status(201).send(item)
    } catch(err) {
        res.status(500).send(err)
    }
}
  
exports.deleteAll = (req, res) => {
    Drinks.deleteMany()
    .then(() => res.send('deleted all'))
    .catch(err => res.status(500).send(err))
}

exports.deleteOne = (req, res) => {
    Drinks.deleteOne({_id: req.params.id})
    .then(() => res.status(204).send(`deleted ${_id}`))
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

exports.updateDrinkPopular = (req, res) => {
    Drinks.updateOne(
        {_id: req.params.id},
        {popular: req.body.popular}
    )
    .then(item => res.status(202).send('updated'))
    .catch(err => res.status(500).send(err))
}

exports.getPopularDrinks = (req, res) => {
    Drinks.find({popular: true})
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))
}

exports.getDrinkById = (req, res) => {
    Drinks.findOne({_id: req.body.id})
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))   
}

//  nested mongoose model
exports.getDrinkComments = (req, res) => {
    Drinks.findOne({_id: req.params.id})
    .select("comment")
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))
}

exports.postDrinkComment = (req, res) => {
    Drinks.updateOne(
        {_id: req.params.id},
        {$push: {
            comment: req.body
        }},
        // validate the fields in subdocuments
        {runValidators: true}
    )
    .then(item => res.status(201).send(item))
    .catch(err => res.status(500).send(err))
}


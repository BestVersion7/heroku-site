const Movie = require('../models/movie')
const formatImage = require('../middleware/formatImage')
const cloudinary = require('cloudinary').v2

exports.FetchAll = (req, res) => {
    Movie.find()
    .then(item => res.send(item))
    .catch(err => res.status(404).send(err))
}

exports.UploadImage = (req, res) => {
    //content is the buffer string from dataUri  
    const file = formatImage(req).content
    cloudinary.uploader.upload(
        file, 
        {
            folder: '0504 belal',
            use_filename: true,
            public_id: `${req.file.fieldname}-${Date.now()}`
        },
        (err, result) => {
            if(result) {
                // console.log(result)
                Movie.create({
                    picture: result.secure_url,
                    public_id: result.public_id
                })
                .then(() => res.status(201).send('created!'))
                .catch(() => res.status(500).send('error'))
            }
        }
    )
}

exports.Deleteall = (req, res) => {
    Movie.deleteMany()
    .then(() => res.send('deleted all records'))
    .catch(err => res.status(500).send(err))
}

exports.DeleteImage = (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(item => {
        cloudinary.uploader.destroy(
            item.public_id,
            (err, result) => {
            if (result) {
                res.status(202).send('deleted')
            }
        })
    })
    .catch(() => res.status(500).send('failed'))

    // Movie.findByIdAndDelete(req.params.id)
    // .then(() => res.status(204).send('deleted'))
    // .catch(() => res.status(500).send('failed'))
}

const express = require('express')
const router = express.Router()
const Gallery = require('../models/gallery')
const path = require('path')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads2/')
    },
    filename: function(req, file, cb) {
        const {fieldname} = file
        const date = Date.now()
        const ext = path.extname(file.originalname).toLowerCase()
        cb(null, `${fieldname}-${date}${ext}`)
    }
})

const upload = multer({
    storage
})

router.get('/', (req, res) => {
    Gallery.find()
    .then(item => res.send(item))
    .catch(err => res.status(500).send(err))
})

router.post('/', upload.single('dze'), (req, res) => {
    Gallery.updateOne(
        {_id: '5ca237aaa58e86380cb70f09'}, {
            $push: {
                gallery: {
                    picture: req.file.path
                }
            }
        }
    )
    .then(item => res.status(201).send('success'))
    .catch(err => res.status(500).send(err))
})

router.delete('/', (req, res) => {
    Gallery.deleteMany()
    .then(() => res.send('success'))
    .catch(() => res.status(500).send('err'))
})

module.exports = router
const express = require('express')
const Movie = require('../models/movie')
const router = express.Router()

//get all
router.get('/', (req, res) => {
    Movie.find()
    .then(item => res.json(item))
    .catch(err => res.status(404).send(err.message))
})

//get all with title param
router.get('/:title', (req, res) => {
    Movie.find({title: req.params.title})
    .then(item => res.json(item))
    .catch(err => res.status(404).send('Cannot find title'))
})

//post ENTERING ON FORM
router.post('/', (req, res) => {
    Movie.create(req.body)
    .then(item => res.send(item))
    .catch(() => res.status(400).send('Cannot create title'))

})

//delete ON FORM ON RIGHT LINK BUT CAN USE BODY INSTEAD 
//and delete from main link
router.delete('/:title', (req, res) => {
    Movie.findOneAndDelete({title: req.params.title})
    .then(item => res.json({result: `Delete Success ${req.params.title}`}))
    .catch(err => res.status(400).json(err.message))
})

//UPDATE ON FORM search title link and then change to body link
router.put('/:title', (req, res) => {
    Movie.findOneAndUpdate({title: req.params.title}, {title: req.body.title})
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err.message))
})


module.exports = router

















// const express = require('express')
// const router = express.Router()
// const Movie = require('../../models/movie')

// // //retrieve all
// // router.get('/', (req, res) => {
// //     Movie.find().then(item => res.json({results: item}))
// //     .catch(err => res.send(err.message))
// // })

// //retrieve by query
// router.get('/', (req, res) => {
//     Movie.find(req.query)
//     .then(item=> res.json({results:item}))
//     .catch(err => res.status(404).send(err))
// })

// //better practise
// router.get('/:id', (req, res) => {
//     Movie.findById(req.params.id)
//     .then(item => res.json({results: item}))
//     .catch(err => res.status(404).send(err.message))
// })

// //post with body params
// router.post('/', (req, res) => {
//     Movie.create(req.body)
//     .then(item => res.json(item))
//     .catch(err => res.status(400).send(err.message))
// })

// //put with 
// router.put('/:price', (req, res) => {
//     Movie.findByIdAndUpdate(req.body.price, {new:true})
//     .then(item => res.send(item))
//     .catch(err => res.send(err.message))
// })

// //delete with body params
// router.delete('/', (req, res) => {
//     if(!req.body.title) {
//         return res.status(400).send('Title not Found')
//     }
//     Movie.findOneAndDelete({
//         title: req.body.title
//     })
//     .then(item => res.json(item))
//     .catch(err => res.status(500).json(err))
// })

// module.exports = router
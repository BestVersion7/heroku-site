const Datauri = require('datauri')
const datauri = new Datauri()
const path = require('path')

//this middleware formats the buffer
const dataUri = req => {
    datauri.format(path.extname(req.file.originalname).toLowerCase(),
    req.file.buffer)
    return datauri
}

module.exports = dataUri
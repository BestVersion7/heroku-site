const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage()

//only accept png & jpg & jpeg
const fileFilter = (req, file, cb) => {
    if(file.mimetype==='image/png' || 
    file.mimetype==='image/jpg' ||
    file.mimetype==='image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//5mb limit
const upload = multer({
    storage,
    limits: {
        fileSize: 5* 1024* 1024
    },
    fileFilter
})

module.exports = upload
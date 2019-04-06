const multer = require('multer')
const path = require('path')

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function(req, file, cb) {
//         const date = Date.now()
//         const {fieldname} = file
//         const ext = path.extname(file.originalname).toLowerCase()
//         cb(null, `${fieldname}-${date}${ext}`)
//     }
// })

const storage = multer.memoryStorage()

//only accept png
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
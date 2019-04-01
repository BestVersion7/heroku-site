const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        const date = Date.now()
        const {fieldname} = file
        const ext = path.extname(file.originalname).toLowerCase()
        cb(null, `${fieldname}-${date}${ext}`)
    }
})

//only accept png
const fileFilter = (req, file, cb) => {
    if(file.mimetype==='image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//15mb limit
const upload = multer({
    storage,
    limits: {
        fileSize: 15* 1024* 1024
    },
    fileFilter
})

module.exports = upload
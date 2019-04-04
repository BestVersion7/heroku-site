const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => { 
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.PRIVATE_KEY, (err, success) => {
        if(err){
            return res.status(500).send('unath')
        }
        if(success) {
            next()
        }
    })
}

module.exports = verifyToken
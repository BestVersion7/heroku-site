const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send("unauth");
    }
    const verifyOptions = {
        audience: req.params.username
    };
    try {
        jwt.verify(token, process.env.PRIVATE_KEY, verifyOptions);
        next();
    } catch (err) {
        return res.status(500).send("unath");
    }
};

module.exports = verifyToken;

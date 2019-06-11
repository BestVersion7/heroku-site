const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formatImage = require("../middleware/formatImage");
const cloudinary = require("cloudinary").v2;

exports.user_all = (req, res, next) => {
    User.find()
        // .select()
        .then(item => res.send(item))
        .catch(err => res.status(500).send(err.message));
};

exports.signup_user = (req, res) => {
    // check username is taken
    User.find({ username: req.body.username }).then(item => {
        if (item.length >= 1) {
            return res.status(409).send("username exists");
        }
        // hash and salt password
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (hash) {
                User.create({
                    username: req.body.username,
                    password: hash,
                    email: req.body.email
                })
                    .then(item => res.status(201).send("Success"))
                    .catch(err => res.status(500).send("fail"));
            }
        });
    });
};

exports.signin_user = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        const compare = await bcrypt.compare(req.body.password, user.password);
        if(!compare) {
            return res.status(401).send('wrong')
        }
        const token = jwt.sign(
            {
                _id: user._id,
                username: user.username
            },
            process.env.PRIVATE_KEY,
            {
                audience: user.username,
                expiresIn: "30m"
            }
        );
        res.cookie("jwt", token, {
            maxAge: 60 * 1000 * 60 //1hour
        });
        return res.send("success");
    } catch (err) {
        res.status(401).send("wrong authentication");
    }
};

exports.clear_database = (req, res, next) => {
    User.deleteMany().then(item => res.send("Deleted all records"));
};

exports.change_picture = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(item => {
            const file = formatImage(req).content;
            cloudinary.uploader.upload(
                file,
                {
                    folder: "1104 profile",
                    public_id: `${req.file.fieldname}-${Date.now()}`
                },
                (err, cb) => {
                    if (cb) {
                        //transform to thumbnail
                        const transformThumbnail = cloudinary.url(
                            cb.public_id,
                            {
                                height: 50,
                                width: 50,
                                crop: "scale",
                                secure: true
                            }
                        );
                        User.updateOne(
                            { _id: item._id },
                            {
                                picture_url_thumbnail: transformThumbnail,
                                picture_url_original: cb.secure_url
                            }
                        )
                            .then(() => res.send("changed picture"))
                            .catch(() => res.status(404).send("404 picture"));
                    }
                }
            );
        })
        .catch(err => res.status(500).send("bad request"));
};

exports.get_user = (req, res) => {
    User.findOne({ username: req.params.username })
        .then(item => {
            if (item !== null) {
                return res.send(item);
            } else {
                return res.status(500).send("500err");
            }
        })
        .catch(err => res.status(500).send("500err"));
};

exports.signout_user = (req, res) => {
    res.clearCookie('jwt')
    res.send('cleared cookie')
}
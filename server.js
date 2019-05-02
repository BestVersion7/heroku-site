const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config()
const cloudinary = require('cloudinary').v2

const app = express();
const movieRouter = require('./api/routes/movie')
const userRouter = require('./api/routes/user')
const galleryRouter = require('./api/routes/gallery')
const drinkRouter = require('./api/routes/drink')

//cross origin sharing (different domain)
app.use(cors())
app.use(morgan('dev'))

//Bodyparser middleware
app.use(bodyParser.json())

//connect database 
const db = process.env.MONGO_URI
mongoose.connect(db, {
    useNewUrlParser: true
})
.then(console.log('mongoose running'))
.catch(() => console.log('mongoose not running'))
 
//connect cloudinary
cloudinary.config({
    CLOUDINARY_URL:process.env.CLOUDINARY_URL
});

//Express routes
app.use('/api/movie', movieRouter)
app.use('/api/user', userRouter)
app.use('/api/drinks', drinkRouter)

//Gallery unused
app.use('/api/gallery', galleryRouter)

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Server port
const port = process.env.PORT || 4000;

//Start server
app.listen(port, () => {
    console.log(`Server is on ${port}`)
})


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')

dotenv.config()

const app = express();
const foodrouter = require('./api/routes/food');
const movieRouter = require('./api/routes/movie')
const userRouter = require('./api/routes/user')
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

//link that comes here goes to the routes
app.use('/api/food', foodrouter)
app.use('/api/movie',movieRouter)
app.use('/user', userRouter)
app.get('/justin', (req, res) => {
    res.redirect('/api/food')
})
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

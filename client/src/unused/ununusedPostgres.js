const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const {Pool} = require('pg')

dotenv.config()

//logging
app.use(morgan('dev'))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//cross origin
app.use(cors())

const foodrouter = require('./api/routes/food');
const movieRouter = require('./api/routes/movie')
const userRouter = require('./api/routes/user')

//Bodyparser middleware
app.use(bodyParser.json())

//POSTGRES DATABASE
const pool = new Pool({
    connectionString: process.env.HEROKU_POSTGRES_API,
    ssl: true
})

// app.get('/api/fame', (req, res) => {
//     pool.query('SELECT * FROM fame', (err, result) => {
//         if (err) {
//           return res.status(400).send('Bad request')
//         }
//         res.json(result.rows)
//       })
// })

//join
app.get('/api/fame', (req, res) => {
    const sql = `
    SELECT fame.id, fame.title, fame.rating, customer.name
    FROM fame
    JOIN customer ON fame.customer_id = customer.customer_id
    `
    const sql2 = `
    SELECT *
    FROM fame
    `
    pool.query(sql2, (err, result) => {
        if (err) {
          console.log(err)
        }
        res.json(result.rows)
      })
})

app.post('/api/fame', (req, res) => {
    const sql = 'INSERT INTO fame(title, rating, customer_id) VALUES ($1, $2, $3)'
    const params = [req.body.title, req.body.rating, req.body.customer_id]
    pool.query(sql, params, (err, result) => {
        if (err) {
            return res.status(400).send(err)
        }
        res.send('Success')
    })
})

app.post('/api/customer', (req, res) => {
    const sql = 'INSERT INTO customer(name, gender) VALUES ($1, $2)'
    const params = [req.body.name, req.body.gender]
    pool.query(sql, params, (err, result) => {
        if (err) {
            return res.status(400).send(err)
        }
        res.send('Success')
    })
})

app.get('/api/customer', (req, res) => {
    const sql = 'SELECT * from customer'
    pool.query(sql, (err, result) => {
        if (err) {
            return res.status(400).send(err)
        }
        res.send(result.rows)
    })
})

app.delete('/api/fame/:id', (req, res) => {
    const sql = 'DELETE FROM fame WHERE id = $1'
    const params = [req.params.id]
    pool.query(sql, params, (err, result) => {
        if (err) {
            return res.status(400).send(err)
        }
        res.send(`Id ${params} deleted`)
    })
})

const port = 4000 || process.env.PORT

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

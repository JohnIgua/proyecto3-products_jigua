const express = require("express")
const cors = require('cors')
require('dotenv').config()

const productsRouter = require('./products/products.router')

const PORT = process.env.PORT || 3000
//const { port } = require('../config')

const db = require('./utils/database')
const app = express()

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

app.use('/api/v1', productsRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
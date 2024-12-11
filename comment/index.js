const express = require('express')
const commentDb = require('./config/dbConnect')
const routes = require('./routes/routes')
require('dotenv').config()
const consume = require('./kafka/consume')

const app = express()
app.use(express.json())
commentDb()
consume()

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}`)
})


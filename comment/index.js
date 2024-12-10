const express = require('express')
const commentDb = require('./config/dbConnect')
const routes = require('./routes/routes')
const consume = require('./kafka/consume')
require('dotenv').config()

const app = express()
app.use(express.json())
commentDb()
consume()

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}`)
})


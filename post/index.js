const express = require('express')
const routes = require('../post/routes/routes')
const consume = require('./kafka/consume')
const postDb = require('./config/dbConnect')

require('dotenv').config()

const app = express()
app.use(express.json())
postDb()

app.use(routes)
consume()

app.listen(process.env.PORT, () => {
    console.log(`post: running at http://localhost:${process.env.PORT}`)
})

const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')
const verification = require('./middleware/userAuthentication')
require('dotenv').config()

const app = express()

app.use(cors())

app.use('/auth', verification, proxy(process.env.URL_AUTH))

app.listen(7000, () => {
    console.log(`running at http://localhost:${7000}`)
})
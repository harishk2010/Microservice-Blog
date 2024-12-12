const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/routes')
const authDb = require('./config/dbConnect')

dotenv.config()
authDb()

const app = express()

app.use(express.json())

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`server ,is running on port http://localhost:${process.env.PORT}`)
})
module.exports = app
const express = require("express")
const { signUpUser, getUsers, loginUser } = require('../controllers/userController')

const router = express.Router()

router
    .post('/signup', signUpUser)

router
    .get('/login', getUsers)
    .post('/login',loginUser)

module.exports = router
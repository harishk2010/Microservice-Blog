const express = require("express")
const { signUpUser, getUsers, loginUser } = require('../controllers/userController')

const router = express.Router()

router
    .get('/', getUsers)

router
    .post('/signup', signUpUser)


router
    .post('/login', loginUser)

module.exports = router
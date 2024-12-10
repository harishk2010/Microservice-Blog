let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
require('dotenv').config()
let { User } = require('../models/userModel')
const produce = require('../kafka/produce')


const getUsers = async (req, res) => {
    try {
        let user = await User.find()
        console.log(user)

        if (user) {

            res.status(200).send(user)

        } else {

            res.status(404).send({ message: 'No users found' })
        }

    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body

        let existingUser = await User.findOne({ email })
        console.log(existingUser)

        if (!existingUser) {

            return res.status(404).send({ message: 'No users found' })
        }
        let passwordCheck = await bcrypt.compare(password, existingUser.password)
        console.log(passwordCheck)

        if (!passwordCheck) {
            return res.status(401).send({ message: "Incorrect Password" })
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_TOKEN,
            // { expiresIn: '1h' }
        )
        res.status(200).send({
            message: 'Login successfull',
            token,
            user: {
                name: existingUser.username,
                email: existingUser.email,
                phone: existingUser.phone
            }

        })

    } catch (error) {
        console.log(error)
    }
}

const signUpUser = async (req, res) => {
    try {

        const { username, email, password, phone } = req.body;
        let user = await User.findOne({ email: email })

        if (user) {
            return res.status(400).send({ message: 'User already exists' })
        }
        let hashedCompare = await bcrypt.hash(password, 10)

        User.create({
            name: username,
            email: email,
            password: hashedCompare,
            phone: phone

        })
        try {
            await produce('add-user', JSON.stringify({ username, email, phone }))
        } catch (error) {
            console.log(error)

        }

        res.send({ message: "user created" })

    } catch (error) {

        console.log(error)
    }
}

module.exports = {
    signUpUser,
    getUsers,
    loginUser
}
const  User  = require("../models/userModel")
const  Post  = require('../models/postModel')
const produce = require('../kafka/produce')


const getPost = async (req, res) => {
    try {
        const posts=await Post.find()
       
        res.status(200).send(posts)

    } catch (error) {
        console.log(error)

    }
}

const addUser = async (userValue) => {
    try {
        console.log({ userValue },"Asdadsad")
        const newUser = new User(userValue)
        await newUser.save()

    } catch (error) {
        console.log(value)
    }
}
const addPost = async (req, res) => {
    try {
        console.log(req.body)
        const { userId, post } = req.body
        const addPost = new Post({
            userId,
            post
        })
        await addPost.save()
        await produce('add-post', JSON.stringify(req.body))
        res.status(200).send({ message: 'Post added successfully' })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPost,
    addUser,
    addPost
}
const Comment = require("../models/commentModel")
const Post = require("../models/postModel")
const User = require("../models/userModel")

const getComments = async (req, res) => {
    try {

        const comments = await Comment.find()

        res.status(200).send(comments)

    } catch (error) {
        console.log(error)
    }
}
const addComment = async (req, res) => {
    try {
        console.log(req.body)
        const { postId, comment, userId } = req.body
        const commentDetails = await Comment.create({
            postId,
            comment,
            userId
        })
        res.status(200).send({ message: 'Comment added successfully' })
    } catch (error) {
        console.log(error)
    }
}

const getPosts = async (req, res) => {
    try {
        let posts = await Post.find()
        res.status(200).send(posts)
    } catch (error) {
        console.log(error)
    }
}

const addUser = async (value) => {
    try {
        const newUser = new User(value)
        await newUser.save()

    } catch (error) {
        console.log(error)
    }
}
const addPost = async (value) => {
    try {
        const newPost = new Post(value)
        await newPost.save()

    } catch (error) {
        console.log(error)
    }
}
const deletePost = async (value) => {
    try {
        console.log(value)
        await Post.deleteOne({ userId: value })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getComments,
    addComment,
    addUser,
    addPost,
    deletePost,
    getPosts
}
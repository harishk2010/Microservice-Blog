const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    post: {
        required: true,
        type: String
    }
})

const Post = mongoose.model('post', postSchema)

module.exports = Post
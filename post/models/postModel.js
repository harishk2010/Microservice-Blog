const mongoose = require('mongoose')

const PostModel = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    post: {
        required: true,
        type: String
    }

})

const Post = mongoose.model('posts', PostModel)

module.exports = Post
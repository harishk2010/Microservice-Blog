const express = require('express')
const { getPost, addPost, deletePost } = require('../controller/postController')
const routes = express.Router()

routes
    .get('/', getPost)
    .post('/', addPost)

routes
    .delete('/:id', deletePost)

module.exports = routes
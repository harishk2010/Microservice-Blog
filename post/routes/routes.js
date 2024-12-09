const express = require('express')
const { getPost, addPost } = require('../controller/postController')
const routes = express.Router()

routes
    .get('/', getPost)
    .post('/', addPost)
    


module.exports = routes
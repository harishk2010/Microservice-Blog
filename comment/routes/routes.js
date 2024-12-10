const express = require("express")
const { getComments, getPosts, addComment } = require('../controllers/commentController')
const routes = express.Router()

routes
    .get("/", getComments)
    .post("/", addComment)
routes
    .get("/posts", getPosts)


module.exports = routes
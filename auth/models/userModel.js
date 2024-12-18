const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: {
        type: Number,
        unique: true,
        required: true

    }
})
const User = mongoose.model('user', UserSchema)
module.exports = {
    User
}
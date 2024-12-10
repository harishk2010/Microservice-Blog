const mongoose = require('mongoose')

const commentDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('comment: DB Connected.....!!!')
    } catch (error) {
        console.log('DB connection,', error)

    }

}
module.exports = commentDb


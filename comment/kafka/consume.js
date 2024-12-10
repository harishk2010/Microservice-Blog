const kafka = require('./kafkaConfig')
const { addUser, addPost, deletePost }=require('../controllers/commentController')

async function consume(title, value) {
    try {
        const consumer = kafka.consumer({ groupId: "comment-group" })
        await consumer.connect()

        await consumer.subscribe({
            topics: ['add-user', 'add-post', 'delete-post'],
            fromBeginning: true
        })
        await consumer.run({
            eachMessage: async ({ topic, message }) => {
                const value = JSON.parse(message.value.toString())
                if (topic == "add-user") {
                    await addUser(value)

                }
                if (topic==="add-post") {
                    await addPost(value)

                }
                if (topic==="delete-post") {
                    await deletePost(value)

                }
            }
        })


    } catch (error) {
        console.log('error from Comment consume kafkajs')

    }
}

module.exports = consume
const kafka = require('./kafkaConfig')
const { addUser, addPost, deletePost }=require('../controllers/commentController')

async function consume() {
    console.log("consume............")
    try {
        const consumer = kafka.consumer({ groupId: "comment-group" })
        await consumer.connect()

        await consumer.subscribe({
            topics: ['add-user', 'add-post', 'delete-post'],
            fromBeginning: true
        })
        await consumer.run({
            eachMessage: async ({ topic, message }) => {
                console.log(topic,"topic")
                try {
                    const value = JSON.parse(message.value.toString());
                    if (topic === "add-user") {
                        await addUser(value);
                    } else if (topic === "add-post") {
                        await addPost(value);
                    } else if (topic === "delete-post") {
                        await deletePost(value);
                    }
                } catch (error) {
                    console.error(`Error processing message from topic ${topic}:`, error);
                }
            },
        });
        


    } catch (error) {
        console.log('error from Comment consume kafkajs')

    }
}

module.exports = consume
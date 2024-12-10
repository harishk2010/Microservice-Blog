const kafka = require('./kafkaConfig')
const { getPost, addUser } = require('../controller/postController')

async function consume() {
  try {
    let consumer = kafka.consumer({ groupId: "post-group" })
    await consumer.connect()
    await consumer.subscribe({
      topics: ["add-user", 'delete-user'],
      fromBeginning: true,
    })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
        const value = JSON.parse(message.value.toString());
        console.log(value, "vv")
        if (topic === "add-user") {
          await addUser(value);
        }
      },
    })
  } catch (error) {
    // console.log(error);
    console.log('error from consume kafkajs')
  }

}
module.exports = consume
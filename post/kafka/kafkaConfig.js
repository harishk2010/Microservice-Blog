const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'post-app',
    brokers: [process.env.KAFKA],

})

module.exports = kafka

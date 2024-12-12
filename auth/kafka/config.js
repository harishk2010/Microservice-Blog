const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'auth-app',
    brokers: ["kafka:9092"],
    // brokers: [process.env.KAFKA],

})

module.exports = kafka

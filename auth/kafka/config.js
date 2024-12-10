const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'auth-app',
    brokers: [process.env.KAFKA],

})

module.exports = kafka

const { Partitioners } = require('kafkajs')
const kafka = require('./config')

async function produce(topic, value) {
    try {
        const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
        await producer.connect()
        await producer.send({
            topic,
            messages: [
                {
                    value
                }
            ]
        })
        await producer.disconnect()

    } catch (error) {
        console.log(error)
    }

}
module.exports = produce
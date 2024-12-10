const {Kafka} =require('kafkajs')

const kafka=new Kafka({
    clientId:'comment-app',
    brokers:[process.env.KAFKA]
})

module.exports=kafka
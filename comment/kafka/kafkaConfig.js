const {Kafka} =require('kafkajs')

const kafka=new Kafka({
    clientId:'comment-app',
    brokers:['localhost:9092']
})

module.exports=kafka
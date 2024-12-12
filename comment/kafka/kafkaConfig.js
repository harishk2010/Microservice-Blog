const {Kafka} =require('kafkajs')

const kafka=new Kafka({
    clientId:'comment-app',
    // brokers:[process.env.KAFKA],
    brokers:["kafka:9092"],
   
})

module.exports=kafka
const mongoose=require('mongoose')

const authDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('auth: DB Connected.....!!!')
    } catch (error) {
        console.log('DB connection,',error)
        
    }

}
module.exports=authDb


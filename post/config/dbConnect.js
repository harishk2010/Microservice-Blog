const mongoose=require('mongoose')

const postDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('post: DB Connected.....!!!')
    } catch (error) {
        console.log('DB connection,',error)
        
    }

}
module.exports=postDb


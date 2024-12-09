const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    phone:{
        required:true,
        unique:true,
        type:Number
    }
})

const User=mongoose.model('users',userSchema)

module.exports=User
const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    tid:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const tasks=mongoose.model('tasks',taskSchema)

module.exports=tasks
const task=require('../models/taskModel')



exports.addTask=async(req,res)=>{
    try{
        const{tid,title,desc,date,status}=req.body
        const newTask=new task({
            tid,title,desc,date,status
        })

        await newTask.save()
        res.status(200).json(newTask)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}





exports.getTask=async(req,res)=>{
    const search=req.query.search
    console.log(search)
    try{

        const tsk=await task.find({title:{$regex:search,$options:'i'}})

        res.status(200).json(tsk)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
 }


 exports.getTaskById=async(req,res)=>{
    try{
        const{tid}=req.params
        const findid=await task.findOne({tid:tid})
        res.status(200).json(findid)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
 }

 
exports.deleteTask = async (req, res) => {

    try {

       const{id}=req.params
        const taskk= await task.findOneAndDelete({_id:id})
        res.status(200).json(taskk)
    }

    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}






exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params
         var { tid,title,desc,date,status } = req.body

        
        const existingtask = await task.findById(id)

        existingtask.tid = tid
        existingtask.title = title
        existingtask.desc = desc
        existingtask.date = date
        existingtask.status = status
        await existingtask.save()
        res.status(200).json(existingtask)

    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
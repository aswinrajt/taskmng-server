const express=require('express')

const taskController=require('../controller/taskController')
const userController=require('../controller/userController')
const jwtmiddle=require('../Middleware/jwtMiddleware')
const router=express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)

router.post('/addtask',jwtmiddle,taskController.addTask)
router.get('/gettask',jwtmiddle,taskController.getTask)
router.get('/getbyid/:tid',jwtmiddle,taskController.getTaskById)
router.delete('/deletetask/:id',jwtmiddle,taskController.deleteTask)
router.put('/updatetask/:id',jwtmiddle,taskController.updateTask)


module.exports=router

const express = require('express')
const router = express.Router()

const {getAllUsers,deleteUser} = require("../controllers/userController")

// const users =[
//     {id: 1, name: 'Alice'},
//     {id: 3, name: 'Bob'}
// ];

// router.get('/',(req,res)=>{
    
//     res.json(users)
// })

// router.get('/delete',(req,res)=>{
    
//     res.json({message: "User delete successfully...."})
// })

router.get('/',getAllUsers);
router.get('/delete',deleteUser);

module.exports= router

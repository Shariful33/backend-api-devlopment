const users =[
    {id: 1, name: 'Alice'},
    {id: 3, name: 'Bob'}
];

const getAllUsers = (req,res)=>{
    res.json(users);
}

const deleteUser = (req,res)=>{
    res.json({message: "User delete successfully...."})
}

module.exports={
    getAllUsers,deleteUser
}
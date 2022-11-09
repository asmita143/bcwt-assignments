'use strict';
const userModel=require('../models/userModel');


const getUsers=async (req,res)=>{
    //remove the password property from all user items in the array
    const users= await userModel.getUsers();
    users.map(user => {
        delete user.password;
        return user;
    });
    res.json(users)
};

const getUser=async (req,res)=>{
    //choose only one object with matching  id
    const user=await userModel.getUserById(req.params.userId,res)
    if(user){
        delete user.password;
        res.json(user);
    }else{
        res.sendStatus(404);
    }
};
const modifyUser= async(req,res)=>{
    const user=req.body;
    if(req.params.userId){
        user.id=req.params.userId;
    }
    const result = await userModel.updateUserById( user, res);
    if (result.affectedRows>0) {
        res.json({message:'user modified'+user.id});   
    } else {
        res.status(404).json({message:'Nothing changed'});
    }
};

const createUser=async (req,res)=>{
    try{
        console.log(req);
        const userAdd= await userModel.addUser(res,req);
        if(userAdd){
        res.send ("User added");}
    }catch(error){
        res.sendStatus(404);
    }
};
const deleteUser= async (req,res)=>{
    const userDelete= await userModel.deleteUser(req.params.userId,res);
    if(userDelete){
        res.json(userDelete)
        console.log("delete sucessful")
    }else{
        res.sendStatus(404);
    }
};
module.exports={
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser,
}
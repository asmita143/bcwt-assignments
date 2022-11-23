'use strict';
const userModel=require('../models/userModel');
const{validationResult}=require('express-validator')


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
const modifyUser=(req,res)=>{};

const createUser=async (req,res)=>{
    const newUser=req.body;
    if (!newUser.role) {
        newUser.role=1
    }
    const errors=validationResult(req);
    
    if(errors.isEmpty()){
        const result=await userModel.addUser(newUser,res);
        res.status(201).json({message:'user created',userId:result})

    }else{
        res.status(400).json({message:'Failed to create user',errors:errors.array()})
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
const checkToken=(req, res)=>{
    res.json({user:req.user})
};

module.exports={
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser,
    checkToken,
}
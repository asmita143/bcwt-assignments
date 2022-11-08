'use strict';
const userModel=require('../models/userModel');


const getUsers=async (req,res)=>{
    //remove the password property from all user items in the array
    const users=await userModel.getUsers;
    users.map(user=>{
        delete user.password;
        return user;
    })
    res.json(users)
}

const getUser=async (req,res)=>{
    //choose only one object with matching  id
    const user=await userModel.getUser(res, req.params.userId)
    if(user){
       // delete user.password;
        res.json(user);
    }else{
        res.sendStatus(404);
    }
};
const modifyUser=(req,res)=>{};
const createUser=async (req,res)=>{
    const userAdd=await userModel.createUser(res,req);
    const userInfo=` username: ${req.body.name},email:${(req.body.email)}`
    res.send('Adding new user' +userInfo);
    console.log(req.body);
};
const deleteUser=(req,res)=>{};
module.exports={
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser
}
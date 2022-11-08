'use strict';
const userModel=require('../models/userModel');


const getUsers=async (req,res)=>{
    //remove the password property from all user items in the array
    const users=await userModel.users;
    users.map(user=>{
        delete user.password;
        return user;
    })
    res.json(users)
}

const getUser=async (res,userId)=>{
    //choose only one object with matching  id
    const users=await userModel.users;
    const user =users.filter(user=> req.params.userId==user.id)[0];
    if(user){
       // delete user.password;
        res.json(user);
    }else{
        res.sendStatus(404);
    }
};
const modifyUser=(req,res)=>{};
const createUser=async(req,res)=>{
    const userInfo=` username: ${req.body.name},email:${(req.body.email)}`
    res.send('Adding new user' +userInfo);
};
const deleteUser=(req,res)=>{};
module.exports={
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser
}
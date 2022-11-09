'use strict';
const express=require('express');
const router=express.Router();
const multer=require('multer');
const userController=require('../controllers/userController');
const upload = multer({dest:'uploads/'})

router.get('/', userController.getUsers)
.get('/:userId', userController.getUser)
.post('/',upload.single('user'), userController.createUser)
.put('/:userId', userController.modifyUser)
.delete('/:userId',userController.deleteUser); 


module.exports=router;
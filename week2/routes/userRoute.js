'use strict';
const express=require('express');
const router=express.Router();
const{body}=require('express-validator')
const userController=require('../controllers/userController');


router.get('/', userController.getUsers)
.get('/:userId', userController.getUser)
.post('/',body('name').isLength({min: 3}), body('email').isEmail(), body('passwd').isLength({min:8}),
userController.createUser)
.put('/', (req, res) => {
    res.send('This one is for the editing users.')
  })
  .delete('/:userId',userController.deleteUser); 


module.exports=router;
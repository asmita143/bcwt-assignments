'use strict';
const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', (req, res) => {
    res.send('This one is for adding more users!!.')
  });
  
  router.put('/', (req, res) => {
    res.send('This one is for the editing users.')
  });
  router.delete('/', (req, res) => {
    res.send('This one is for deleting users!!.')
  });



module.exports=router;
'use strict';
const express=require('express');
const router=express.Router();
const multer=require('multer');
const userController=require('../controllers/userController');
const upload = multer({dest:'uploads/'})

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/',upload.single('user'), userController.createUser);
  
router.put('/', (req, res) => {
    res.send('This one is for the editing users.')
  });
router.delete('/:userId',userController.deleteUser); 


module.exports=router;
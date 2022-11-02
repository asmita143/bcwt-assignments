'use strict';
// catRoute
const express=require('express');
const router=express.Router();
const catController = require('../controllers/catController');

  router.get('/', catController.getCats);
  
  router.get('/:catId', catController.getCat);
  
  router.post('/', (req, res) => {
    res.send('This one is for adding more cats!!.')
  });
  
  router.put('/', (req, res) => {
    res.send('This one is for the editing cats.')
  });
  router.delete('/', (req, res) => {
    res.send('This one is for deleting cats!!.')
  });

  module.exports=router;
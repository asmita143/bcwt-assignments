'use strict';
const {rawListeners}=require('../database/db')
const catModel=require('../models/catModel')


const getCats=async(req,res)=>{
    const cats = await catModel.getAllCats(res);
    res.json(cats);
}

const getCat=async(req,res)=>{
    //choose only one object with matching  id
    const cat =await catModel.getCatById(res, req.params.catId);
    if(cat){
        res.json(cat);
    }else{
        res.sendStatus(404);
    }
};
const modifyCat=(req,res)=>{};

const createCat=async(req,res)=>{
    const cat=req.body;
    cat.filename=req.file.filename;
    const catId = await catModel.addCat(cat,res);
    res.json(catId);
};
const deleteCat= async(req,res)=>{
    const result= await catModel.deleteCatById (req.params.catId,res);
    if(deleteCat){
        res.json(deleteCat)
        console.log(" Cat delete sucessful")
    }else{
        res.sendStatus(404);
    }
};

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat
}
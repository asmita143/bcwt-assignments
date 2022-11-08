'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    res.status(500).send('error',e.message)
    console.error("error", e.message);
  }
};
const getCatById = async (res,catId) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat where cat_id= ?",[catId]);
    return rows[0];
  } catch (e) {
    res.status(500).send('error',e.message)
    console.error("error", e.message);
  }
};
const createCat= async (res,req)=>{
  try{
    const [rows] = await promisePool.query("INSERT INTO wop_cat(name,weight,owner,filename,birthdate) VALUE (?,?,?,?,?,?)",[null,req.body.name, req.body.weight, req.body.owner, req.file.path, req.body.birthdate]);
    return rows[0];
  }catch(e){
    res.status(501).send(e.message);
  }
};

module.exports = {
  getAllCats,
  getCatById,
  
};

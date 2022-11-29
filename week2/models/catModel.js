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
const addCat= async (cat,res)=>{
  try{
    const values=[cat.name, cat.weight, cat.owner, cat.filename, cat.birthdate, cat.coords];
    const [result] = await promisePool.query("INSERT INTO wop_cat VALUE (null,?,?,?,?,?,?)",values);
    return result.insertId;
  }catch(e){
    res.status(500).send(e.message);
  }
};
const deleteCatById= async (catId,owner, res)=>{
  try {
    const[rows]= await promisePool.query("DELETE FROM wop_cat WHERE cat_id = ? AND owner = ?",
    [catId, owner]);
    return rows[0];
  } catch (e) {
    res.status(500).send(e.message)
    console.error("error", e.message);
  }
}

module.exports = {
  getAllCats,
  getCatById,
  addCat,
  deleteCatById,
};

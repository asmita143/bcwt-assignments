'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getUsers = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT user_id,name,email,role FROM wop_user");
    return rows;
  } catch (e) {
    res.status(500).send('error',e.message)
    console.error("error", e.message);
  }
};
const getUser = async (res,userId) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_user where user_id= ?",[userId]);
    return rows[0];
  } catch (e) {
    //res.status(500).send('error',e.message);
    console.error("error", e.message);
  }
};
const createUser = async (res,req) => {
  try {
    const[rows]= await promisePool.query("INSERT INTO wop_user(name,email,password) VALUE (?,?,?)", [ req.body.name, req.body.email, req.body.passwd]  );
    return rows[0];
  } catch (e) {
    res.status(501).send(e.message)
    //console.error("error", e.message);
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
};

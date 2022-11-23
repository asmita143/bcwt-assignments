'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getUsers = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_user");
    console.log(rows);
    return rows;
  } catch (e) {
    res.status(500).send('error',e.message)
    console.error("error", e.message);
  }
};
const getUserById = async (id,res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT user_id, name, email, role FROM wop_user where user_id= ?",[id]);
    return rows[0];
  } catch (e) {
    res.status(500).send(e.message);
    console.error("error", e.message);
  }
};
const getUserLogin = async (user) => {
  try {
    console.log('getUserLogin()', user);
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        user);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const addUser = async (user,res) => {
  try {
    const values=[ user.name, user.email, user.passwd, user.role];
    console.log(values);
    const[result]= await promisePool.query("INSERT INTO wop_user(name,email,password) VALUE ( ?, ?, ?)", values );
    return result.insertId;
  } catch (e) {
    res.status(501).send(e.message)
    console.error("error", e.message);
  }
};
const deleteUser =async (id,res)=>{
  try {
    const[rows]= await promisePool.query("DELETE FROM wop_user where user_id=?",[id]);
    return rows [0];
  } catch (e) {
    res.status(501).send(e.message)
    console.error("error", e.message);
  }
}

module.exports = {
  getUserById,
  getUsers,
  deleteUser,
  addUser,
  getUserLogin
};

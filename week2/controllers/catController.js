"use strict";
const { rawListeners } = require("../database/db");
const catModel = require("../models/catModel");
const { validationResult } = require("express-validator");

const getCats = async (req, res) => {
  const cats = await catModel.getAllCats(res);
  cats.map((cat) => {
    // convert birthdate date object to 'YYYY-MM-DD' string format
    cat.birthdate = cat.birthdate.toISOString().split("T")[0];
    return cat;
  });
  res.json(cats);
};

const getCat = async (req, res) => {
  //choose only one object with matching  id
  const cat = await catModel.getCatById(res, req.params.catId);
  if (cat) {
    cat.birthdate = cat.birthdate.toISOString().split("T")[0];
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};
const modifyCat = async (req, res) => {
  const user = req.user;
  if (req.params.catId) {
    cat.id = req.params.catId;
  }
  const result = await catModel.updateCatById(cat, user, res);
  if (result.affectedRows > 0) {
    res.json({ message: "cat modified: " + cat.id });
  } else {
    res.status(400).json({ message: "nothing modified" });
  }
};

const createCat = async (req, res) => {
  const errors = validationResult(req);
  if (!req.file) {
    res.status(400).json({ message: "file is missing or invalid" });
  } else if (errors.isEmpty()) {
    const cat = req.body;
    cat.owner = req.user.user_id;
    cat.filename = req.file.filename;
    const catId = await catModel.addCat(cat, res);
    res.status(201).json({ message: "cat created", catId });
  } else {
    res
      .status(400)
      .json({ message: "cat creation failed", errors: errors.array() });
  }
};
const deleteCat = async (req, res) => {
  const result = await catModel.deleteCatById(
    req.params.catId,
    req.user.user_id,
    res
  );
  if (deleteCat) {
    res.json(deleteCat);
    console.log(" Cat delete sucessful");
  } else {
    res.status(401).json({ message: "cat delete failed" });
  }
};

module.exports = {
  getCat,
  getCats,
  modifyCat,
  createCat,
  deleteCat,
};

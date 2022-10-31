'use strict';

const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.use(express.static('public'));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get("/catinfo", (req, res) => {
    const cat = {
      name: "Frank",
      birthdate: "2010-12-25",
      weight: 5,
    };
    res.json(cat);
  });

  app.get('/',(req,res) =>{
    res.render('test', {
      title: "Frank",
      header1: "2010-12-25",
      header2: "5",
      paraGraph: "Page is opened "+(counter++)+" times",
    });
  })  

app.listen(port, () => {
  console.log(`I am being used. ${port}`);
});
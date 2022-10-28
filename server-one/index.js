'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('It works.');
  });
  
app.listen(port, () => {
  console.log(`I am being used. ${port}`);
});
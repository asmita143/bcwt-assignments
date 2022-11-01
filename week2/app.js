'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

app.get('/cat/:catId', (req, res) => {
  console.log(req.params)
  res.send('This one is for cat id!!.')
});

app.post('/cat', (req, res) => {
  res.send('This one is for adding more cats!!.')
});

app.put('/cat', (req, res) => {
  res.send('This one is for the editing cats.')
});
app.delete('/cat', (req, res) => {
  res.send('This one is for deleting cats!!.')
});

// app.get('/cat', (req, res) => {
// res.send('From this endpoint you can get cats.')
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

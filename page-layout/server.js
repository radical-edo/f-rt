'use strict';
const path = require('path');

const express = require('express');

const app = express();
const PORT = 3001;
const PUBLIC_PATH = path.join(__dirname, 'public');

app.use(express.static(PUBLIC_PATH));

app.get('/', function (req, res) {
  res.sendFile(PUBLIC_PATH + '/guidelines.html');
});

app.listen(PORT, function () {
  console.log('Server listenting on', PORT);
});

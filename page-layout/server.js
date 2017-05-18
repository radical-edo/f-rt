'use strict';
const path = require('path');

const express = require('express');

const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
  console.log('Server listenting on', PORT);
});

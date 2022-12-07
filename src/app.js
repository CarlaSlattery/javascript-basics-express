const express = require('express');
const strings = require('./routes/strings');
const numbers = require('./routes/numbers');

const app = express(); // init express

app.use('/strings', strings);
app.use('/numbers', numbers);

module.exports = app;

const express = require('express');
const numberRouter = require('./routes/numberRouter');

const app = express(); // init express

const stringsRouter = require('./routes/stringsRouter');

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('./numbers', numberRouter);

module.exports = app;

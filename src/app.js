const express = require('express');

const app = express(); // init express

const stringsRouter = require('./routes/stringsRouter');
const numberRouter = require('./routes/numberRouter');
const arraysRouter = require('./routes/arraysRouter');
const booleansRouter = require('./routes/booleansRouter');

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numberRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;

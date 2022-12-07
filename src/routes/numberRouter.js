/* eslint-disable radix */
const express = require('express');

const numberRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

numberRouter.get('/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

module.exports = numberRouter;

/* eslint-disable radix */
const express = require('express');

const numberRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

function requireNums(req, res, next) {
  const { value } = req.params;
  if (Number.isNaN(Number(value))) {
    return res.status(400).json({ error: 'Parameter must be valid numbers.' });
  }
  return next();
}

function stopDivideByZero(req, res, next) {
  const { b } = req.body;
  if (Number(b) === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return next();
}
numberRouter.get('/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

numberRouter.get('/subtract/:num1/from/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  return res.status(200).json({ result: subtract(num1, num2) });
});

numberRouter.post('/multiply', (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);

  if (!num1 || !num2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(200).json({ result: multiply(num1, num2) });
  }
});

numberRouter.post('/divide', (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);

  if (!num1 || !num2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(num1, num2) });
  }
});

numberRouter.post('/remainder', (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);

  if (!num1 || !num2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(num1, num2) });
  }
});
module.exports = numberRouter;

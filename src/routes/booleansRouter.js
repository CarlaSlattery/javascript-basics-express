const express = require('express');

const booleansRouter = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

function checkIsNum(req, res, next) {
  const { value } = req.params;
  if (Number.isNaN(Number(value))) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return next();
}

function checkIfChar(req, res, next) {
  const { char } = req.params;
  if (char.length !== 1) {
    return res.status(400).json({ error: 'Char must be a single character' });
  }
  return next();
}

booleansRouter.post('/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

booleansRouter.post('/truthiness', (req, res) => {
  const { value } = req.body;
  return res.status(200).json({ result: truthiness(value) });
});

booleansRouter.get('is-odd/:value', (req, res) => {
  const { value } = req.params;
  res.status(200).json({ result: isOdd(value) });
});

booleansRouter.get('/cat/starts-with/:char', (req, res) => {
  const { char } = req.params;
  res.status(200).json({ result: startsWith(char, 'cat') });
});
module.exports = booleansRouter;

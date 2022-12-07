const { Router } = require('express');
const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const router = Router();

route.get('numbers/add/:num1/and/:num2', (req, res) => {
  // eslint-disable-next-line radix
  const num1 = parseInt(req.params.num1);
  // eslint-disable-next-line radix
  const num2 = parseInt(req.params.num2);
  res.json({ result: add(num1, num2) });
});

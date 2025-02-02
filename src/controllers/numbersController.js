const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addNums = (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
};

const subtractNums = (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num1, num2) });
  }
};

const multiplyNums = (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
};

const divideNums = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 !== 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(num1, num2) });
  }
};

const remainderNums = (req, res) => {
  const num1 = parseInt(req.body.a, 10);
  const num2 = parseInt(req.body.b, 10);
  return res.status(200).json({ result: remainder(num1, num2) });
};

module.exports = {
  addNums,
  subtractNums,
  multiplyNums,
  divideNums,
  remainderNums,
};

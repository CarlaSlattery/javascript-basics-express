function requireNums(req, res, next) {
  const { num1, num2 } = req.params;
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    return res.status(400).json({ error: 'Parameter must be valid numbers.' });
  }
  return next();
}

function require2Params(req, res, next) {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
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

// module.exports = numbersMiddlewear;

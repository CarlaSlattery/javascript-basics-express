const express = require('express');

const stringsRouter = express.Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('../lib/strings');

stringsRouter.get('/hello/:string', (req, res) => {
  return res.status(200).json({ result: sayHello(req.params.string) });
});
stringsRouter.get('/upper/:string', (req, res) => {
  return res.status(200).json({ result: uppercase(req.params.string) });
});

stringsRouter.get('/lower/:string', (req, res) => {
  return res.status(200).json({ result: lowercase(req.params.string) });
});

stringsRouter.get('/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

stringsRouter.get('/count-characters/:string', (req, res) => {
  return res.status(200).json({ result: countCharacters(req.params.string) });
});

module.exports = stringsRouter;

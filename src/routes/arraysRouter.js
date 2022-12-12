const express = require('express');

const arraysRouter = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

arraysRouter.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  return res.status(200).json({ result: getNthElement(index, array) });
});

arraysRouter.post('/to-string', (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: arrayToCSVString(array) });
});

arraysRouter.post('append', (req, res) => {
  const { value } = req.params;
  const { array } = req.body;
  return res.status(200).json({ result: addToArray2(value, array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

arraysRouter.post('/remove-element', (req, res) => {
  const index = req.params.index || 0;
  const { array } = req.body;
  return res.status(200).json({ result: removeNthElement2(index, array) });
});

module.exports = arraysRouter;

const express = require('express');

const numbersController = require('../controllers/numbersController');
const numbersMiddlewear = require('../middlewear/numbersMiddlewear');

const numberRouter = express.Router();

numberRouter.get('/add/:num1/and/:num2', numbersController.addNums);
numberRouter.get('/subtract/:num1/from/:num2', numbersController.subtractNums);
numberRouter.post('/multiply', numbersController.multiplyNums);
numberRouter.post('/divide', numbersController.divideNums);
numberRouter.post('/remainder', numbersController.remainderNums);
module.exports = numberRouter;

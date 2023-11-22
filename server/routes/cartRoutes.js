const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/add', cartController.addToCart);
cartRouter.post('/read', cartController.getCart);

module.exports = cartRouter;

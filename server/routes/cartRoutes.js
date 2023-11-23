const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/add', cartController.addToCart);
cartRouter.get('/read/:userId', cartController.getCart);

module.exports = cartRouter;

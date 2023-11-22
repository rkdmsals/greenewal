const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/api/addToCart', cartController.addToCart);
// cartRouter.get('/api/cart/:userId', cartController.getCart);

module.exports = cartRouter;

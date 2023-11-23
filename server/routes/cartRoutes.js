const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/add', cartController.addToCart);
cartRouter.get('/read/:userId', cartController.getCart);
// cartRouter.get('/direct/:userId', cartController.getDirect)
cartRouter.post('/uploadPurchase', cartController.uploadPurchase)
module.exports = cartRouter;

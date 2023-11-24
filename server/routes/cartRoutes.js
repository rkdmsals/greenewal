const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/add', cartController.addToCart);
cartRouter.get('/read/:userId', cartController.getCart);
cartRouter.post('/uploadPurchase', cartController.uploadPurchase);
cartRouter.post('/modify', cartController.modifyQuantity)
module.exports = cartRouter;

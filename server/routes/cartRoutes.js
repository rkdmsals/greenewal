const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.post('/add', cartController.addToCart);
cartRouter.get('/read/:userId', cartController.getCart);
cartRouter.post('/uploadPurchase', cartController.uploadPurchase);
cartRouter.post('/modify', cartController.modifyQuantity);
cartRouter.get('/checkOrder/:userId', cartController.getOrder);
cartRouter.post('/removeFromCart', cartController.removeFromCart);
cartRouter.post('/dropCart', cartController.dropCart)
module.exports = cartRouter;

const express = require('express');
const CartRouter = express.Router();
//var mongoose = require("mongoose");
const { Cart } = require('./models/Cart');
const { User } = require('./models/userInfo');

// 장바구니에 상품 추가
CartRouter.post('/api/addToCart', (req, res) => {

    let userId = req.body.userId;
    let productId = req.body.productId;
    let quantity = req.body.quantity;

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: '해당 사용자를 찾을 수 없습니다.' });
            }

            return Cart.findOneAndUpdate(
                { userId },
                { $addToSet: { productList: { productId, quantity } } },
                { upsert: true, new: true }
            );
        })
        .then(cart => {
            res.status(200).json({ message: '상품이 장바구니에 추가되었습니다.', cart });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// 장바구니 조회
CartRouter.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;

    Cart.findOne({ userId })
        .populate('products.productId')
        .then(cart => {
            if (!cart) {
                return res.status(404).json({ message: '장바구니가 존재하지 않습니다.' });
            }

            res.status(200).json({ cart });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// 다른 라우터들...

module.exports = CartRouter;

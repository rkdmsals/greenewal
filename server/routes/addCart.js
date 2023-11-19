const express = require('express');
const CartRouter = express.Router();
const { Cart } = require('./models/Cart');
const { User } = require('./models/userInfo');

// 장바구니에 상품 추가
CartRouter.post('/api/addToCart', async (req, res) => {
    try {
        const { userId } = req.params;
        const { productId, quantity } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: '해당 사용자를 찾을 수 없습니다.' });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
        } else {
            const existingProductIndex = cart.products.findIndex(
                (product) => product.productId === productId
            );

            if (existingProductIndex !== -1) {
                cart.products[existingProductIndex].quantity += quantity || 1;
            } else {
                cart.products.push({ productId, quantity: quantity || 1 });
            }
        }

        await cart.save();
        res.status(200).json({ message: '상품이 장바구니에 추가되었습니다.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 장바구니 조회

CartRouter.get('/cart/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId }).populate('products.productId');

        if (!cart) {
            return res.status(404).json({ message: '장바구니가 존재하지 않습니다.' });
        }

        res.status(200).json({ cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 다른 라우터들...

module.exports = CartRouter;
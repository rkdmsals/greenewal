const { Cart } = require('../models/Cart');


// 장바구니에 아이템 추가
module.exports.addToCart = async (req, res) => {
    try {
        const userId = req.body && req.body.userId;
        const productId = req.body && req.body.productId;
        const quantity = req.body && req.body.quantity;

        if (!userId || !productId || !quantity) {
            return res.status(400).json({ error: '요청이 올바르지 않습니다.' });
        }
        console.log("여기까지");
        /*const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;*/

        // 장바구니가 있는지 확인하고 없으면 새로 생성
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            cart = new Cart({ userId, productList: [{ productId, quantity }] });
        } else {
            // 이미 장바구니가 있는 경우, 해당 아이템을 추가하거나 수량 증가
            const existingProductIndex = cart.productList.findIndex(
                (product) => product.productId === productId
            );

            if (existingProductIndex !== -1) {
                cart.productList[existingProductIndex].quantity += quantity || 1;
            } else {
                cart.productList.push({ productId, quantity: quantity || 1 });
            }
        }

        await cart.save();
        res.status(200).json({ message: '상품이 장바구니에 추가되었습니다.', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


/*
exports.getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        // 해당 유저의 장바구니를 찾아서 반환
        const cart = await Cart.findOne({ userId }).populate('productList.productId');

        if (!cart) {
            return res.status(404).json({ message: '장바구니가 존재하지 않습니다.' });
        }

        res.status(200).json({ cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
*/
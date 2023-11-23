const { Cart } = require('../models/Cart');


// 장바구니에 아이템 추가
module.exports.addToCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;

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

module.exports.getCart = async (req, res) => {
    try {
        const userId = req.params.userId; // 요청에서 userId를 가져옴

        const cart = await Cart.findOne({ userId }).populate('productList.productId'); // 해당 userId의 장바구니 데이터 조회

        /*
        if (!cart) {
            return res.status(404).json({ message: '장바구니가 존재하지 않습니다.' });
        }
        */
        res.status(200).json({ cart }); // 장바구니 데이터를 JSON 형태로 응답
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 메시지를 응답
        res.status(500).json({ error: '서버에서 장바구니 불러오기 에러 발생' });
    }
};

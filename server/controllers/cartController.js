const { Cart } = require('../models/Cart');
const { Order } = require('../models/Order')

// 장바구니에 아이템 추가
module.exports.addToCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const title = req.body.title;
        const price = req.body.price;
        // console.log("컨트롤러에서", title, price)
        // 장바구니가 있는지 확인하고 없으면 새로 생성
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            cart = new Cart({ userId, productList: [{ productId, quantity, title, price }] });
        } else {
            // 이미 장바구니가 있는 경우, 해당 아이템을 추가하거나 수량 증가
            const existingProductIndex = cart.productList.findIndex(
                (product) => product.productId === productId
            );

            if (existingProductIndex !== -1) {
                cart.productList[existingProductIndex].quantity += quantity || 1;
            } else {
                cart.productList.push({ productId, quantity: quantity || 1, title: title, price: price });
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

        const cart = await Cart.findOne({ userId: userId }).populate('productList.productId'); // 해당 userId의 장바구니 데이터 조회

        /*
        if (!cart) {
            return res.status(404).json({ message: '장바구니가 존재하지 않습니다.' });
        }
        */
        res.status(200).json(cart); // 장바구니 데이터를 JSON 형태로 응답
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 메시지를 응답
        res.status(500).json({ error: '서버에서 장바구니 불러오기 에러 발생' });
    }
};

module.exports.uploadPurchase = async (req, res) => {
    try {
        const userId = req.body.userId; // 요청에서 userId를 가져옴
        const productList = req.body.productList;
        const orderName = req.body.orderName;
        const orderTime = req.body.orderTime;
        const refundBank = req.body.refundBank;
        const refundAccount = req.body.refundAccount;
        //Order라는 DB 새로 만들 것!
        //주문 내역(종류와 수량)과 가격 정보, 전체 가격, 환불 정보 등의 정보가 들어가야 함
        let order = new Order({ userId, productList, orderName, orderTime, refundBank, refundAccount });

        await order.save();
        res.status(200).json({ message: '주문이 완료되었습니다.', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.modifyQuantity = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;

        // 장바구니가 있는지 확인하고 없으면 새로 생성
        let cart = await Cart.findOne({ userId: userId });

        // 이미 장바구니가 있는 경우, 해당 아이템을 추가하거나 수량 증가
        const existingProductIndex = cart.productList.findIndex(
            (product) => product.productId === productId
        );

        if (existingProductIndex !== -1) {
            cart.productList[existingProductIndex].quantity = quantity || 1;
        }
        await cart.save();
        res.status(200).json({ message: '상품이 장바구니에 추가되었습니다.', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.getOrder = async (req, res) => {
    try {
        const userId = req.params.userId; // 요청에서 userId를 가져옴

        const order = await Order.find({ "userId": userId }).populate('productList.productId'); // 해당 userId의 장바구니 데이터 조회
        console.log("order에서", order)
        res.status(200).json(order); // 주문 데이터를 JSON 형태로 응답
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 메시지를 응답
        res.status(500).json({ error: '서버에서 장바구니 불러오기 에러 발생' });
    }
};

module.exports.removeFromCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: '장바구니를 찾을 수 없습니다.' });
        }

        const existingProductIndex = cart.productList.findIndex(
            (product) => product.productId === productId
        );

        if (existingProductIndex !== -1) {
            cart.productList.splice(existingProductIndex, 1);
        } else {
            return res.status(404).json({ message: '해당 상품을 장바구니에서 찾을 수 없습니다.' });
        }

        await cart.save();
        res.status(200).json({ message: '상품이 장바구니에서 삭제되었습니다.', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.dropCart = async (req, res) => {

    const userId = req.body.userId;
    console.log("dropCart에서", userId)
    try {
        await Cart.findOneAndDelete({ "userId": userId })
            .then(res.status(200).json({ message: '장바구니 초기화 완료되었습니다.' }))

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
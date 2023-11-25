import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery"
function CartEach({ userId, productId, quantityFirst, productName, price, updateTotal }) {
    // const userId = values.userId;
    // const productId = values.productId;
    // const quantityfirst = values.quantity;
    // const productName = values.productName;
    // const price = values.price;
    // const updateTotal = () => { values.updateTotal(true) }

    // const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(quantityFirst);

    useEffect(() => {
        return setQuantity(quantityFirst);
    }, [productId])

    const minusQuantity = () => {

        if (quantity > 1) {
            const reQuantity = quantity - 1
            axios.post("/api/addToCart/modify", {
                userId: userId,
                productId: productId,
                quantity: reQuantity,
            })
                ;
            return setQuantity(reQuantity), updateTotal()
        }

    }
    const plusQuantity = () => {

        if (quantity < 10) {
            const reQuantity = quantity + 1
            axios.post("/api/addToCart/modify", {
                userId: userId,
                productId: productId,
                quantity: reQuantity,
            })

            return setQuantity(reQuantity), updateTotal();
        }
    }

    const removeFromCart = () => {
        axios.post('/api/addToCart/removeFromCart', {
            userId: userId,
            productId: productId
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('상품이 장바구니에서 삭제되었습니다.');
                    //const updatedCartItems = cartItems.filter(item => item.productId !== productId);
                    //setCartItems(updatedCartItems);
                    // $(`#cart${productId}`).css("display", "none")
                    return updateTotal(), setQuantity(quantityFirst);
                } else {
                    console.error('상품을 장바구니에서 삭제하는 데 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('장바구니 요청 중 오류 발생:', error);
            });
    }

    return (
        <div className='CartEach' id={`cart${productId}`}>
            <img className="CartProductImg"></img>
            <div className='CartRight'>
                <div>
                    <div style={{ fontWeight: "700" }}>{productName}</div>
                    <div>{price}</div>
                </div>
                <div className="CartEachButtons">
                    <div className="DelBtn" onClick={removeFromCart}></div>
                    <div className="CartNum">
                        <div className="MinusBtn" onClick={minusQuantity}></div>
                        {quantity}
                        <div className="PlusBtn" onClick={plusQuantity}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartEach
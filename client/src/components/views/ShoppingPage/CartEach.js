import { useEffect, useState } from "react";
import axios from "axios";

function CartEach({ userId, productId, quantityFirst, productName, price, updateTotal }) {
    // const userId = values.userId;
    // const productId = values.productId;
    // const quantityfirst = values.quantity;
    // const productName = values.productName;
    // const price = values.price;
    // const updateTotal = () => { values.updateTotal(true) }

    const [quantity, setQuantity] = useState(quantityFirst);

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
    return (
        <div className='CartEach'>
            <img className="CartProductImg"></img>
            <div className='CartRight'>
                <div>
                    <div style={{ fontWeight: "700" }}>{productName}</div>
                    <div>{price}</div>
                </div>
                <div className="CartEachButtons">
                    <div className="DelBtn"></div>
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
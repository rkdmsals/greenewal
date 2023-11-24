import { useEffect, useState } from "react";
import axios from "axios";
function CartEach(values) {
    const userId = values.userId;
    const productId = values.productId;
    // const quantity = values.quantity;
    const productName = values.productName;
    const price = values.price;
    const [quantity, setQuantity] = useState(values.quantity);
    // useEffect(() => {
    //     setQuantityRe(quantity)
    // }, [quantity])
    const minusQuantity = () => {

        if (quantity > 1) {
            const reQuantity = quantity - 1
            axios.post("/api/addToCart/modify", {
                userId: userId,
                productId: productId,
                quantity: reQuantity,
            })
            return setQuantity(reQuantity)
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
            return setQuantity(reQuantity)
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
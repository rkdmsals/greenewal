function CartEach(values) {
    const userId = values.userId;
    const productId = values.productId;
    const quantity = values.quantity;
    const productName = values.productName;
    const price = values.price;
    return (
        <div className='CartEach'>
            <img className="CartProductImg"></img>
            <div className='CartRight'>
                <div style={{ fontWeight: "700" }}>{productName}</div>
                <div>{price}</div>
            </div>
            <div className="DelBtn"></div>
            <div className="CartNum">
                <div className="MinusBtn"></div>
                {quantity}
                <div className="PlusBtn"></div>
            </div>
        </div>
    )
}
export default CartEach
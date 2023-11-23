function CartEach(values) {

    const productId = values.productId;
    const quantity = values.quantity;
    return (
        <div className='CartEach'>
            <img className="CartProductImg"></img>
            <div className='CartRight'>
                <div style={{ fontWeight: "700" }}>스티커팩</div>
                <div>1000</div>
            </div>
            <div className="DelBtn"></div>
            <div className="CartNum">
                <div className="MinusBtn"></div>
                {quantity}
                <div className="PlusBtn"></div>
                {/* 01 */}
            </div>
        </div>
    )
}
export default CartEach
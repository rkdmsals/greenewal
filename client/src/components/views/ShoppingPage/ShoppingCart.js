import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
import "./ShoppingCart.css"
import CartEach from './CartEach';
import $ from "jquery"

function ShoppingCart() {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [cartItems, setCartItems] = useState([{ "productId": 1, "quantity": 0 }]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        dispatch(auth()).then(response => {
            console.log(response);

            if (response.payload.isAuth) {
                setUserId(response.payload.id);
                console.log(response.payload.id);
                return;
            }
            else {
                navigate('/login');
            }
        })
    }, []);

    useEffect(() => {
        if (userId) {
            axios.get(`/api/addToCart/read/${userId}`)
                .then(response => {
                    // console.log(response.data.productList[0])
                    var productListCopy = [{ "productId": 1, "quantity": 3 }];
                    response.data.productList ? response.data.productList.map((a, idx) => {

                        productListCopy[idx] = Object.assign({}, a);

                    }) : console.log("productListCopy", productListCopy);
                    return setCartItems(productListCopy);
                }
                )
                .catch(err => {
                    console.error('장바구니 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);

    useEffect(() => {
        var total_price = 0
        var total_quantity = 0
        cartItems.map((a) => [
            total_price = total_price + a.price * a.quantity,
            total_quantity = total_quantity + a.quantity
        ])
        setTotalPrice(total_price)
        setTotalQuantity(total_quantity)
    }, [cartItems])


    return (
        <div className='Cart'>
            {/* 카트에 들어있는 개수만큼 CartEach 반환해서 사용하면 됨 */}
            {console.log("cartItems:", cartItems)}

            <div className='CartContainer'>
                {cartItems ? cartItems.map((a) => {
                    return <CartEach userId={userId} productId={a.productId} quantity={a.quantity} productName={a.title} price={a.price} />
                }) : console.log("안됨")}
            </div>
            <div className='ShopBill' >
                <div className='BillLine1'>
                    <span>결제할 상품 </span>
                    <span style={{ color: "#7D7D7D" }}>총 {totalQuantity}개</span></div>
                <div className='BillLine2'>
                    <span style={{ fontSize: "14px" }}>총 결제 금액  {">"}</span>
                    <span>{totalPrice}w</span></div>
                <button onClick={() => navigate("/paying")}>결제하기</button>
            </div>
        </div>)

}
export default ShoppingCart;
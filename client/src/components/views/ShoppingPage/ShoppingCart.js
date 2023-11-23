import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
import "./ShoppingCart.css"
import CartEach from './CartEach';

function ShoppingCart() {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [cartItems, setCartItems] = useState([]);

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
                    setCartItems(response.data.cart.productList);
                })
                .catch(err => {
                    console.error('장바구니 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);

    const setBillOpen = () => [

    ]
    return (
        <div className='Cart'>
            {/* <Header /> */}
            {/* 카트에 들어있는 개수만큼 CartEach 반환해서 사용하면 됨 */}
            <div className='CartContainer'>
                <CartEach />
                <CartEach />
                <CartEach />
                <CartEach />
                <CartEach />
                <CartEach />
            </div>
            <div className='ShopBill' onClick={setBillOpen}>
                <div className='BillLine1'>
                    <span>결제할 상품 </span>
                    <span style={{ color: "#7D7D7D" }}>총 N개</span></div>
                <div className='BillLine2'>
                    <span style={{ fontSize: "14px" }}>총 결제 금액  {">"}</span>
                    <span>214,000w</span></div>
                <button>결제하기</button>
            </div>
        </div>)
}
export default ShoppingCart;
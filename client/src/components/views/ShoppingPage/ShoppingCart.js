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
    const [cartItems, setCartItems] = useState([{ "productId": 0, "quantity": 1 }]);
    // const [isCartItems, setIsCartItems] = useState(false);
    // const [theArray, setTheArray] = useState({[]});
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

                    return setCartItems(response.data.productList)

                })
                .catch(err => {
                    console.error('장바구니 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);

    var total_price = 0, total_quantity = 0;
    const callPrice = () => {
        total_price = 0;
        cartItems.map((a) => {
            total_price += a.quantity;//이거 계산하려면 가격정보도 DB에 있어야 할 듯?
        })
        return total_price;
    }
    const calQuantity = () => {
        total_quantity = 0;
        cartItems.map((a) => {
            total_quantity += a.quantity;
        })
        return total_quantity;
    }
    const setBillOpen = () => [
        //결제창 열도록 navigate
    ]

    useEffect(() => {
        // showCartList();
        return calQuantity, callPrice;
    }, [cartItems])

    // const showCartList = () => {

    //     cartItems ? cartItems.map((a, idx) => {
    //         $(".CartContainer").append()
    //         return <CartEach productId={a.productId} quantity={a.quantity} />
    //     }) : console.log("안됨")

    // }

    return (
        <div className='Cart'>

            {/* <Header /> */}
            {/* 카트에 들어있는 개수만큼 CartEach 반환해서 사용하면 됨 */}
            {/* {setTimeout(() => { */}
            {console.log("cartItems:", cartItems)}
            (<div className='CartContainer'>
                {cartItems.map((a) => {
                    <CartEach productId={a.productId} quantity={a.quantity} />
                })}
            </div>)
            {/* }, 30000)} */}

            <div className='ShopBill' onClick={setBillOpen}>
                <div className='BillLine1'>
                    <span>결제할 상품 </span>
                    <span style={{ color: "#7D7D7D" }}>총 {total_quantity}개</span></div>
                <div className='BillLine2'>
                    <span style={{ fontSize: "14px" }}>총 결제 금액  {">"}</span>
                    <span>{total_price}w</span></div>
                <button>결제하기</button>
            </div>
        </div>)

}
export default ShoppingCart;
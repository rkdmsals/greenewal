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
        // return showCartList;
        // showCartList();
        return calQuantity, callPrice


    }, [cartItems])

    const showCartList = () => {

        // cartItems ? cartItems.map((a) => {
        //     $(".CartContainer").append(<CartEach productId={2} quantity={2} />)
        //     return <CartEach productId={a.productId} quantity={a.quantity} />
        // }) : console.log("안됨")

    }

    const callPrice = () => {
        var price = 0;
        cartItems.map((a) => {
            price = price + a.quantity;//이거 계산하려면 가격정보도 DB에 있어야 할 듯?
        })
        return setTotalPrice(price);
    }
    const calQuantity = () => {
        var quantity = 0;
        cartItems.map((a) => {
            quantity = quantity + a.quantity;
        })
        return setTotalQuantity(quantity);
    }
    const setBillOpen = () => [
        //결제창 열도록 navigate
    ]


    // $(".CartContainer").append(<CartEach productId={3} quantity={3} />)
    return (
        <div className='Cart'>

            {/* <Header /> */}
            {/* 카트에 들어있는 개수만큼 CartEach 반환해서 사용하면 됨 */}
            {console.log("cartItems:", cartItems)}

            <div className='CartContainer'>
                {cartItems ? cartItems.map((a) => {
                    return <CartEach productId={a.productId} quantity={a.quantity} />
                }) : showCartList()}
            </div>
            <div className='ShopBill' onClick={setBillOpen}>
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
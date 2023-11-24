import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
import "./ShoppingCart.css"
import CartEach from './CartEach';

function ShoppingCart() {

    const navigate = useNavigate();
    // const location = useLocation();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    // const [cartItems, setCartItems] = useState([{}]);
    //위처럼 하면 이미 객체가 들어가 있어서 CartEach가 하나 더 들어감
    const [cartItems, setCartItems] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [dataChange, setDataChange] = useState(false);

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
    }, [userId, dataChange]);

    useEffect(() => {
        var total_price = 0
        var total_quantity = 0

        cartItems.length ? cartItems.map((a) => [
            total_price = total_price + a.price * a.quantity,
            total_quantity = total_quantity + a.quantity
        ]) : console.log("장바구니에 담긴 상품이 존재x")

        return setTotalPrice(total_price), setTotalQuantity(total_quantity)
    }, [cartItems])

    useEffect(() => {
        if (dataChange) {
            var total_price = 0
            var total_quantity = 0
            console.log("실행되는지?")
            cartItems.length ? cartItems.map((a) => [
                total_price = total_price + a.price * a.quantity,
                total_quantity = total_quantity + a.quantity
            ]) : console.log("장바구니에 담긴 상품이 존재x")

            return setTotalPrice(total_price), setTotalQuantity(total_quantity), setDataChange(false);
        } else { console.log("이상함...") }

    }, [dataChange])
    const updateTotal = () => {

        console.log("값이 변경됨!!")

        return setDataChange(true);
    }

    return (
        <div className='Cart'>
            {/* 카트에 들어있는 개수만큼 CartEach 반환해서 사용하면 됨 */}
            {console.log("cartItems:", cartItems)}

            <div className='CartContainer'>
                {cartItems.length ? cartItems.map((a) => {
                    return <CartEach userId={userId} productId={a.productId} quantityFirst={a.quantity} productName={a.title} price={a.price} updateTotal={updateTotal} />
                }) : console.log("안됨")}
            </div>
            <div className='ShopBill' >
                <div className='BillLine1'>
                    <span>결제할 상품 </span>
                    <span style={{ color: "#7D7D7D" }}>총 {totalQuantity}개</span></div>
                <div className='BillLine2'>
                    <span style={{ fontSize: "14px" }}>총 결제 금액  {">"}</span>
                    <span>{totalPrice}w</span></div>
                <button onClick={() => { if (cartItems.length) { navigate("/paying") } else { alert("장바구니에 담긴 상품이 없습니다!") } }}>결제하기</button>
            </div>
        </div>)

}
export default ShoppingCart;
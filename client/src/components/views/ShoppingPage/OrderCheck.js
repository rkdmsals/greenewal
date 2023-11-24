// import { useState } from "react";
import "./PayingPage.css"
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
function OrderCheck() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderThings, setOrderThings] = useState([]);
    useEffect(() => {
        dispatch(auth()).then(response => {
            // console.log(response);

            if (response.payload.isAuth) {
                setUserId(response.payload.id);
                // console.log(response.payload.id);
                return;
            }
            else {
                navigate('/login');
            }
        })
    }, []);

    /*order DB 가져오는 코드 */
    useEffect(() => {
        if (userId) {
            axios.get(`/api/addToCart/checkOrder/${userId}`)
                .then(response => {
                    console.log(response.data)
                    return setOrderThings(response.data);
                })
                .catch(err => {
                    console.error('장바구니 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);

    useEffect(() => {
        var total_price = 0
        {
            orderThings.productList ? orderThings.productList.map((a) => {
                total_price = total_price + a.price * a.quantity
            }) : console.log("orderThings 받지 못함")
        }
        setTotalPrice(total_price)
    }, [orderThings])

    return (<div className="PayingBack">
        {/* 구매 내역 */}
        <div className="PayContainer BuyingList">
            <div className="PayingTitle">구매 내역</div>
            {/* {console.log(orderThings.productList)} */}
            {orderThings.productList ? orderThings.productList.map((a, idx) => {
                return (
                    <div className="BuyingEach">
                        <div>{a.title}({a.quantity})</div>
                        <div>{a.price}￦</div>
                    </div>)
            }) : console.log("전부 됨")}

            {/* 굿즈 다 반환하고 나서 */}
            <div className="PayTotal">
                <div>총 결제 금액 {">"}</div>
                <div>{totalPrice}￦</div>
            </div>
        </div>
        {/* 주문자 정보 */}
        <div className="PayContainer">
            <div className="PayingTitle">주문자 정보</div>
            <div className="PayingInfo">
                <div><span>입금자명</span><div className="userInfoInOrder">{orderThings.orderName}</div></div>
                <div><span>입금 시각</span><div className="userInfoInOrder">{orderThings.orderTime}</div></div>
                <div><span>환불계좌</span><div className="userInfoInOrder">{orderThings.refundAccount}</div ></div>
                <div><span>- 은행</span><div className="userInfoInOrder">{orderThings.refundBank}</div></div>
            </div>
        </div>

        {/* 장소/시간 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">장소/시간 안내</div>
            <div className="PayingTxt">수령 장소: ECC 이삼봉홀 굿즈 부스<br />
                수령 가능 시간: 11/27(월) 9:00-17:00</div>
            <img src="/img/eventinformation/map.png"></img>
        </div>
    </div>)
}

export default OrderCheck;
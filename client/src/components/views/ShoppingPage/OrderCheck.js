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
    const [totalPrice, setTotalPrice] = useState([]);
    const [orderThings, setOrderThings] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        dispatch(auth()).then(response => {
            // console.log(response);

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

    /*order DB 가져오는 코드 */
    useEffect(() => {
        if (userId) {
            axios.post("/api/addToCart/checkOrder", {
                userId: userId,
            })
                .then(response => {
                    console.log(response.data.order)
                    if (response.data.order) {
                        return setOrderThings(response.data.order);
                    } else {
                        return alert("주문 내역이 없습니다!")
                    }
                })
                .catch(err => {
                    console.error('주문내역 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);

    useEffect(() => {
        let total_price = [];
        {//주문 정보의 길이가 0이 아니면, 즉, 있으면 map 돌려서 정보 반환
            orderThings.length ? orderThings.map((b, idx) => {

                total_price[idx] = 0;
                {
                    b.productList ? b.productList.map((a) => {
                        total_price[idx] = total_price[idx] + a.price * a.quantity
                    })
                        : console.log("없음");
                }
            }) : console.log("")
        }
        if (orderThings.length) {
            console.log(orderThings)
            setUserInfo(orderThings[0])
        }
        setTotalPrice(total_price)
    }, [orderThings])

    return (<div className="PayingBack" id={orderThings.length ? "show" : "DontShow"} >
        {/* 구매 내역 */}
        {orderThings.length ? orderThings.map((b, idx) => {
            return (
                <div className="PayContainer BuyingList">
                    <div className="PayingTitle">구매 내역{idx + 1}</div>
                    {/* {console.log(orderThings.productList)} */}
                    {b.productList ? b.productList.map((a) => {
                        return (
                            <div className="BuyingEach">
                                <div>{a.title}({a.quantity})</div>
                                <div>{a.price}￦</div>
                            </div>)
                    }) : console.log("전부 됨")}

                    {/* 굿즈 다 반환하고 나서 */}
                    <div className="PayTotal">
                        <div>총 결제 금액 {">"}</div>
                        <div>{totalPrice[idx]}￦</div>
                    </div>
                </div>)
        }) : console.log("반환 완료")}
        {/* 주문자 정보 */}
        {<div className="PayContainer" >
            <div className="PayingTitle">주문자 정보</div>
            <div className="PayingInfo" >
                <div><span>입금자명 : </span><div className="userInfoInOrder">{userInfo.orderName}</div></div>
                <div><span>입금시각 : </span><div className="userInfoInOrder">{userInfo.orderTime}</div></div>
                <div><span>환불계좌 : </span><div className="userInfoInOrder">{userInfo.refundAccount}</div ></div>
                <div><span>환불은행 : </span><div className="userInfoInOrder">{userInfo.refundBank}</div></div>
            </div>
        </div>}

        {/* 장소/시간 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">장소/시간 안내</div>
            <div className="PayingTxt">수령 장소: ECC 이삼봉홀 운영진 부스<br />
                수령 가능 시간: 11/27(월) 9:00-17:00</div>
            <img src="/img/eventinformation/map.png"></img>
        </div>
    </div>)
}

export default OrderCheck;
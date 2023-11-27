import "./PayingPage.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import { useLocation } from "react-router-dom";
// import $ from "jquery"

function PayingForDirect() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [userId, setUserId] = useState("");

    const productId = location.state.productId;//굿즈 아이디
    var goods_name = location.state.productName;//굿즈 이름
    var goods_num = 1//굿즈 수량
    var goods_price = location.state.productPrice//굿즈 가격
    var total_price = location.state.productPrice//총 가격

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


    const DoPurchase = () => {
        //장바구니 DB에서 똑같이 읽어와서 다르게 보여주고,
        //유저 정보를 post해주면 됨!
        const orderName = document.getElementById('OrderName').value;
        const orderTime = document.getElementById('OrderTime').value;
        const refundBank = document.getElementById('RefundBank').value;
        const refundAccount = document.getElementById('RefundAccount').value;

        // console.log("값은", orderName, orderTime, refundBank, refundAccount)
        if (orderName && orderTime && refundBank && refundAccount) {
            axios.post('/api/addToCart/uploadPurchase', {
                userId: userId,
                productList: {
                    productId: productId,
                    quantity: goods_num,
                    title: goods_name,
                    price: goods_price,
                },
                orderName: orderName,
                orderTime: orderTime,
                refundBank: refundBank,
                refundAccount: refundAccount,
            })
                .then(function (response) {
                    // console.log(response);
                    alert("주문이 완료되었습니다!");
                    //이때 cartDB 삭제하기
                    navigate("/shop")
                })
                .catch(function (error) {
                    // console.log(error);
                });
        } else {
            alert("주문에 필요한 정보를 모두 작성해주세요")
        }
    }

    return (<div className="PayingBack">
        {/* 구매 내역 */}
        <div className="PayContainer BuyingList">
            <div className="PayingTitle">구매 내역</div>
            <div className="BuyingEach">
                <div>{goods_name}({1})</div>
                <div>{goods_price}￦</div>
            </div>

            {/* 굿즈 다 반환하고 나서 */}
            <div className="PayTotal">
                <div>총 결제 금액 {">"}</div>
                <div>{total_price}￦</div>
            </div>
        </div>
        {/* 계좌 송금 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">계좌 송금 안내</div>
            <div className="PayingTxt">신한 100-026-784849 (예금주명:이화이언)으로
                위의 금액을 송금후, 아래 정보를 작성해주세요.<br />
                * 송금 확인 버튼을 누르지 않으면 정보가 저장되지 않습니다.<br />
                * 송금하신 후, 꼭 송금 확인 버튼을 눌러주세요
            </div>
            <div className="PayingInfo">
                <div><span>입금자명</span><input type="text" id="OrderName" ></input></div>
                <div><span>입금시각</span><input type="text" id="OrderTime"></input></div>
                <div><span>환불계좌</span><input type="text" id="RefundAccount" ></input></div>
                <div><span>환불은행</span><input type="text" id="RefundBank"></input></div>
            </div>
        </div>

        {/* 장소/시간 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">장소/시간 안내</div>
            <div className="PayingTxt">수령 장소: ECC 이삼봉홀 굿즈 부스<br />
                수령 가능 시간: 11/27(월) 9:00-17:00<br />
                굿즈 부스에 있는 운영진에게 송금 완료 화면을 보여주세요!</div>
            <img src="/img/eventinformation/map.png"></img>
        </div>

        <div className="PayCheckBtn" onClick={DoPurchase}>송금 확인</div>
    </div>)
}

export default PayingForDirect;
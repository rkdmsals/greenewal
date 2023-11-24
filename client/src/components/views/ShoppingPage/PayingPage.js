import "./PayingPage.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
// import $ from "jquery"

function PayingPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
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

    /*장바구니 DB에 담긴 물품들 가져오는 코드 */
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
                })
                .catch(err => {
                    console.error('장바구니 불러오기 중 오류 발생', err);
                });
        }
    }, [userId]);
    useEffect(() => {
        var total_price = 0
        cartItems.map((a) => [
            total_price = total_price + a.price * a.quantity
        ])
        setTotalPrice(total_price)
    }, [cartItems])


    const DoPurchase = () => {
        //장바구니 DB에서 똑같이 읽어와서 다르게 보여주고,
        //유저 정보를 post해주면 됨!
        const orderName = document.getElementById('OrderName').value;
        const orderTime = document.getElementById('OrderTime').value;
        const refundBank = document.getElementById('RefundBank').value;
        const refundAccount = document.getElementById('RefundAccount').value;

        console.log("값은", orderName, orderTime, refundBank, refundAccount)
        if (orderName && orderTime && refundBank && refundAccount) {
            axios.post('/api/addToCart/uploadPurchase', {
                userId: userId,
                productList: cartItems,
                orderName: orderName,
                orderTime: orderTime,
                refundBank: refundBank,
                refundAccount: refundAccount,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("주문에 필요한 정보를 모두 작성해주세요")
        }
    }

    return (<div className="PayingBack">
        {/* 구매 내역 */}
        <div className="PayContainer BuyingList">
            <div className="PayingTitle">구매 내역</div>
            {cartItems ? cartItems.map((a) => {
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
                <div><span>입금 시각</span><input type="text" id="OrderTime"></input></div>
                <div><span>환불계좌</span><input type="text" id="RefundAccount" ></input></div>
                <div><span>- 은행</span><input type="text" id="RefundBank"></input></div>
            </div>
        </div>

        {/* 장소/시간 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">장소/시간 안내</div>
            <div className="PayingTxt">수령 장소: ECC 이삼봉홀 굿즈 부스<br />
                수령 가능 시간: 11/27(월) 9:00-17:00</div>
            <img src="/img/eventinformation/map.png"></img>
        </div>

        <div className="PayCheckBtn" onClick={DoPurchase}>송금 확인</div>
    </div>)
}

export default PayingPage;
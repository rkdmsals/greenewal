import "./PayingPage.css"

function PayingPage() {
    var goods_name = "2022 배꽃정원 굿즈 - 말랑 비즈 인형";//굿즈 이름
    var goods_num = 2//굿즈 수량
    var goods_price = 14000//굿즈 가격
    var total_price = 214000 //총 가격
    return (<div className="PayingBack">
        {/* 구매 내역 */}
        <div className="PayContainer BuyingList">
            <div className="PayingTitle">구매 내역</div>
            <div className="BuyingEach">
                <div>{goods_name}({goods_num})</div>
                <div>{goods_price}￦</div>
            </div>
            <div className="BuyingEach">
                <div>{goods_name}({goods_num})</div>
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
            <div className="PayingTxt">신한 000-0000-000000 (이화이언)으로
                위의 금액을 송금후, 아래 정보를 작성해주세요.<br />
                * 송금 확인 버튼을 누르지 않으면 정보가 저장되지 않습니다.<br />
                * 송금하신 후, 꼭 송금 확인 버튼을 눌러주세요
            </div>
            <div>
                <div><span>입금자명</span><input type="text" title="입금자명" ></input></div>
                <div><span>입금 시각</span><input type="text" title="입금 시각"></input></div>
            </div>
        </div>

        {/* 장소/시간 안내 */}
        <div className="PayContainer">
            <div className="PayingTitle">장소/시간 안내</div>
            <div className="PayingTxt">수령 장소: ECC 이삼봉홀 굿즈 부스<br />
                수령 가능 시간: 11/27(월) 9:00-17:00</div>
            <img></img>
        </div>

        <div className="PayCheckBtn">송금 확인</div>
    </div>)
}

export default PayingPage;
import { useNavigate } from "react-router-dom";
import "./Renewal.css"

function Renewal() {
    const navigate = useNavigate();
    return (<div className="RenewalBack">
        <div className="RenewalTop">
            <div className="RenewalTitle">
                <div>Renewal</div>
                <div><span>Booth</span><img src="/img/common/title.png" alt="" className="TitleImgRe" /></div>
            </div>

        </div>
        <div className="RenewalTxt">달라진 이화이언을 한눈에! <br />이화이언의 달라진 모습을 직접 살펴보세요</div>
        <div>
            <div className="RenewalContainer">
                <div className="ReConMiddle">
                    <img src="/img/common/n1.png"></img>
                    <div>
                        <div className="ReConSub">온라인&오프라인</div>
                        <div className="ReConTitle">리뉴얼 미리보기</div>
                    </div>
                </div>
                <div className="ReContTxt">설명설명설명설명설명설명설명설명설명설명설명설명</div>
                <div className="RenewalRoute">

                    <span>피드백 남기러 가기</span>
                    <div className="ReRouteImg" onClick={() => { navigate("/feedback") }}></div>

                </div>
            </div>
            <div className="RenewalContainer" id="yellowGreenC">
                <div className="ReConMiddle">
                    <img src="/img/common/n1.png"></img>
                    <div>
                        <div className="ReConSub">온라인&오프라인</div>
                        <div className="ReConTitle">이화이언 리뉴얼 미리보기</div>
                    </div>
                </div>
                <div className="ReContTxt">설명설명설명설명설명설명설명설명설명설명설명설명</div>
                <div className="RenewalRoute">

                    <span>피드백 남기러 가기</span>
                    <div className="ReRouteImg" onClick={() => { navigate("/feedback") }}></div>

                </div>
            </div>
        </div>
    </div>)
}

export default Renewal;
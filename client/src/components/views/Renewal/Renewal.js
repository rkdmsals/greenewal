import { useNavigate } from "react-router-dom";
import "./Renewal.css"
import Footer from "../../Others/Footer";

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
                    <img src="/img/common/n1.png" alt="1번 이미지"></img>
                    <div>
                        <div className="ReConSub">온라인&오프라인</div>
                        <div className="ReConTitle">리뉴얼 미리보기</div>
                    </div>
                </div>
                <div className="ReContTxt">이화이언이 22주년을 맞아 새로운 모습으로 찾아오게 되었습니다! 새로워진 이화이언의 모습을 오프라인에서 먼저 만나보세요! </div>
                <div className="RenewalRoute" onClick={() => { navigate("/feedback") }}>

                    <span>피드백 남기러 가기</span>
                    <div className="ReRouteImg" ></div>

                </div>
            </div>
            <div className="RenewalContainer" id="yellowGreenC">
                <div className="ReConMiddle">
                    <img src="/img/common/n2.png" alt="2번 이미지"></img>
                    <div>
                        <div className="ReConSub">오프라인</div>
                        <div className="ReConTitle">이화이언 만점고사</div>
                    </div>
                </div>
                <div className="ReContTxt">이화여자대학교와 이화이언에 대해 얼마나 알고 있는지 알아보는 시간!
                    리뉴얼 부스에서 만점고사 문제를 받고 응시할 경우, 도장 1개가 부여됩니다.</div>
                {/* <div className="RenewalRoute">

                    <span>피드백 남기러 가기</span>
                    <div className="ReRouteImg" onClick={() => { navigate("/feedback") }}></div>

                </div> */}
            </div>
        </div>
        {/* <Footer /> */}
    </div>)
}

export default Renewal;
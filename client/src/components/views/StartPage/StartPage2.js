import { useNavigate } from "react-router-dom";
import StartPage from "./StartPage";
import "./StartPage2.css"
function StartPage2() {
    const navigate = useNavigate();

    // setTimeout(() => {
    //     $(".startPage_background").css("display", "none")
    // }, 3000)

    return (<div className="GrnPage">
        {/* <StartPage /> */}
        <div>
            <div className="GrnTitle">Ewahaian</div>
            <div className="GrnTitle">Gree<span>n-ew</span>al</div>
            <img></img>
        </div>
        <div className="GrnTxt">이화이언 리뉴얼을 기념하여 11/27 {"<Green-ewal>"}행사가 이삼봉홀에서 진행됩니다.</div>
        <div className="GrnBanner">
            <img className="GrnBanE" onClick={() => navigate("https://www.notion.so/ewhaianweb/11-00bd59c9c1aa4795bd2edfb293e67d8b")}></img>
        </div>
        <div className="GrnRoute">
            <div>행사 정보<img></img></div>
            <div>부스 정보<img></img></div>
            <div>강연 정보<img></img></div>
            <div>이벤트 정보<img></img></div>
        </div>
    </div>)
}

export default StartPage2;
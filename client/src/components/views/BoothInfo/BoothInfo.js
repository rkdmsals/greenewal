import Footer from "../../Others/Footer"
import "./BoothInfo.css"
import Header from "../../Others/Header"
import { useNavigate } from "react-router-dom"
function BoothInfo() {
    const navigate = useNavigate();
    return (<div className="BoothInfo">
        {/* <div className="BoothMap">여기에 부스 배치도 들어가도록</div> */}
        <div className="BoothTitle">Booth Info</div>

        <div className="AllBooths">
            {/* {'>'} 전체부스 */}
            <div className="EachBooth">
                <img className="BoothImg" src="/img/menu/bp.png"></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">네컷 사진 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  {"#"}총장네컷 </div>
                    <button onClick={() => navigate("/photo")}></button>
                </div>
            </div>
            <div className="EachBooth">
                <img className="BoothImg" src="/img/menu/bp.png"></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">먹거리 부스</div>
                    <div >추운 겨울, 수업 가기 전 잠깐의 휴식! 따뜻한 핫초코와 미니붕어빵, 델리만쥬!</div>
                    <div className="BoothTag">#미니붕어빵  #델리만쥬  #핫초코</div>
                    <button onClick={() => navigate("/foods")} ></button>
                </div>
            </div>
            <div className="EachBooth">
                <img className="BoothImg" src="/img/menu/bp.png"></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">리뉴얼 부스</div>
                    <div >새롭게 단장한 이화이언! 무엇이 달라졌는지 알아볼까요?</div>
                    <div className="BoothTag">#리뉴얼  #이화그린  #이화이언</div>
                    <button onClick={() => navigate("/renewal")}></button>
                </div>
            </div>
            <div className="EachBooth" id="LongTxt">
                <img className="BoothImg" src="/img/menu/bp.png"></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">운영진 부스 - 이벤트</div>
                    <div >모은 도장으로 다양한 상품으로 구성된 선물 교환! 추가 이벤트도 참여하기!</div>
                    <div className="BoothTag">#선물  #베스트드레서  #인스타스토리</div>
                    <button onClick={() => navigate("/event")}></button>
                </div>
            </div>
            <div className="EachBooth" id="LongTxt">
                <img className="BoothImg" src="/img/menu/bp.png"></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">운영진 부스 - 지난 굿즈</div>
                    <div >역대 이화이언 굿즈! 이화이언의 지난 굿즈들을 만나보세요!</div>
                    <div className="BoothTag">#지난굿즈  #전차스  #말랑인형</div>
                    <button onClick={() => navigate("/shop")}></button>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default BoothInfo
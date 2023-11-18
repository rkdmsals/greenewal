import Footer from "../../Others/Footer"
import "./BoothInfo.css"
function BoothInfo() {
    return (<div className="BoothInfo">
        <header></header>
        <div className="BoothMap">여기에 부스 배치도 들어가도록</div>
        <div className="AllBooths">
            {'>'} 전체부스
            <div className="EachBooth">
                <img></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">네컷 사진 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  #총장네컷 </div>
                    <button></button>
                </div>
            </div>
            <div className="EachBooth">
                <img></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">먹거리 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  #총장네컷</div>
                    <button></button>
                </div>
            </div>
            <div className="EachBooth">
                <img></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">리뉴얼 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  #총장네컷</div>
                    <button></button>
                </div>
            </div>
            <div className="EachBooth">
                <img></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">퀴즈 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  #총장네컷</div>
                    <button></button>
                </div>
            </div>
            <div className="EachBooth">
                <img></img>
                <div className="EachBoothInfo">
                    <div className="BoothName">이벤트 부스</div>
                    <div >다양한 프레임으로 그리뉴얼에서의 추억을
                        사진으로 남겨보세요!</div>
                    <div className="BoothTag">#그린네컷  #뽐뽑네컷  #총장네컷</div>
                    <button></button>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default BoothInfo
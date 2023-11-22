import React from 'react';
import './quizgamestyle.css';
import Header from "../../Others/Header"

const Quizgame = () => {
  return (
    <div>
    <div className="quizgame-container">
      
      <div className="titletext">Quiz·Game<br></br> 
      Booth</div>
      <img src="img/quizgame/title.png" alt="반짝이" className="title-image" />

      <div className="test">
        <img src="img/quizgame/n1.png" alt="" className="qg-n1-image" />
        <div className="qg-sort">
           오프라인&온라인
        </div>
        <div className="test-title">
                이화이언 만점고사
        </div>
        <div className="boothep">
            <div className="text-bootep">
                이화여자대학교와 이화이언에 대해 <br></br>
                얼마나 알고 있는지 알아보는 시간!<br></br><br></br>
                오프라인 부스에서 응시할 경우, <br></br>
                도장 1개가 부여됩니다.
            </div>

        </div>
        <div className="plustext">
                *온라인 응시는 도장이 제공되지 않습니다.
        </div>
        <div className="testmove">
            <div className="testmovetxt">응시하기</div>
            <img src="img/quizgame/testmove.png" alt="" className="testmove-image" />
        </div>
      </div>
    </div>       
    </div>
  );
}

export default Quizgame;


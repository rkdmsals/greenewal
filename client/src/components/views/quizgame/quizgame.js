import React from 'react';
import './quizgamestyle.css';
import Header from "../../Others/Header"

const Quizgame = () => {
  return (
    <div>
    <div className="quizgame-container">
      
      <div className="titletext">Quiz·Game<br></br> 
      Booth</div>
      <img src="img/title.png" alt="반짝이" className="title-image" />

      <div className="test">
        <img src="img/n1.png" alt="" className="n1-image" />
        <div className="sort">
            <div className="test-sort">
                오프라인&온라인
            </div>    
        </div>
        <div className="title">
            <div className="test-title">
                이화이언 만점고사
            </div>
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
            <img src="img/testmove.png" alt="" className="testmove-image" />
        </div>
      </div>

      <div className="search">
            <img src="img/n2.png" alt="" className="n2-image" />
            <div className="sort">
                <div className="search-sort">
                    오프라인
                </div>    
            </div>
            <div className="title">
                <div className="search-title">
                    이화이언 달라진 점 찾기
                </div>
            </div>
            <div className="boothep">
                <div className="search-bootep">
                    새롭게 단장한 이화이언! <br></br>
                    전과 비교했을 때 어떤 점이 달라졌을까요?<br></br><br></br>
                    이화이언 웹 페이지에 접속한 후, <br></br>
                    달라진 점 4가지를 찾는 이화인에게 <br></br>
                    도장 1개가 부여됩니다!
                </div>
            </div>
        </div>  

      <div className="match">
            <img src="img/n3.png" alt="" className="n3-image" />
            <div className="sort">
                <div className="match-sort">
                    오프라인
                </div>    
            </div>
            <div className="title">
                <div className="match-title">
                실시간!<br></br>접속자 수·조회수 맞추기
                </div>
            </div>
            <div className="boothep">
                <div className="match-bootep">
                비밀의 화원에서 현재 접속자 수를 볼 수 있다는 점,<br></br>
                알고 계셨나요?<br></br><br></br>
                현재 접속자 수를 가깝게 예측한 벗들,<br></br>
                최근 업로드 된 9가지 게시글 중 랜덤으로 <br></br>
                한 게시글을 선택하여 조회수를 가깝게 예측한 벗들에게<br></br>
                이화이언이 간단한 간식을 준비했습니다! <br></br><br></br>
                접속자 수 & 조회수 맞추고 달달하게 수업 들으러 고고! 
                </div>
            </div>
        </div>  
    </div>
    </div>
  );
}

export default Quizgame;


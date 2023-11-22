import React from 'react';
import './eventinformationstyle.css'
import Header from "../../Others/Header"


const Eventinformation = () => {
  return (
    <div>
    <div className="eventinformation-container">
      
      <div className="titletext_ei">About<br></br>Green-ewal</div>
      <img src="/img/title.png" alt="반짝이" className="title-image" />
      <div className="main">
            <img src="/img/leftposter.png" alt="poster" className="leftposter-image"/>
            <img src="/img/poster.png" alt="poster" className="poster-image"/>
            <img src="/img/rightposter.png" alt="poster" className="rightposter-image"/>
            <div className="maintext">
                새로워진 이화이언!<br></br>
                이화이언의 리뉴얼을 기념하여<br></br>
                Green-ewal 행사가 이삼봉홀에서 진행됩니다.
            </div>
      </div>  
      
      <div className="date">
        <img src="/img/clover.png" alt="클로버" className="clover-image"/>
        <div className="title">
            <div className="title1">
                행사 일시
            </div>
        </div>

        <div className="datetext">
            <div className="date1text">
                2023년 11월 27일(월) 10:00 - 20:00
            </div>
        
            <div className="date2text">
            1부 부스 운영  |  10:00 - 15:45<br></br>
            정비 시간  |  15:45 - 17:00<br></br>
            2부 강연  |  17:00 - 20:00
            </div>
        </div>
      </div> 


       
      <img src="/img/line.png" alt="구분선" className="line-image"/>
      
      <div className="map">
            <img src="/img/clover.png" alt="클로버" className="clover-image"/>
            <div className="title">
                <div className="title2">
                    찾아오시는 길
                </div>
            </div>
            <div className="maptext">
                <div className="maptext1">
                    이화여자대학교 ECC B4층 이삼봉홀
                </div>
                <div className="maptext2">
                    : 스타벅스 ECC점 옆, ECC N번 출구 근처
                </div>
            </div>
            <img src="/img/map.png" alt="지도" className="map-image"/>
      </div>  

      <img src="/img/line.png" alt="구분선" className="line-image"/>

      <div className="help">
            <img src="/img/clover.png" alt="클로버" className="clover-image"/>
            <div className="title">
                <div className="title3">
                    도움주신 분들
                </div>
    
            </div>
            <img src="hleplogo" alt="헬퍼로고" className="hleplogo-image"/>
      </div>
      <img src="/img/line.png" alt="구분선" className="line-image"/>
      <div className="aboutmanagement">
            <img src="/img/clover.png" alt="클로버" className="clover-image"/>
            <div className="title">    
                <div className="title4">
                    어바웃 운영진
                </div>
            </div>   
            <div className="amtext"> 
                <div className="item-41">
                    <div className="number">
                        41기
                    </div>
                    <div className="name">
                        조수연, 나혜인, 윤경민, 한현경
                    </div>
                </div>
                <div className="item-42">
                    <div className="number">
                        42기
                    </div>
                    <div className="name">
                        신민선, 김지수, 민가은, 박민경, 이유진
                    </div>
                </div>  
                <div className="item-43">
                    <div className="number">
                        43기
                    </div>
                    <div className="name">
                        김가은, 김지하, 신지원, 안례진, 유예림
                    </div>
                </div>  
                <div className="item-44">
                    <div className="number">
                        44기
                    </div>
                    <div className="name">
                        나혜은, 박영주, 이재이, 김기림, 김예원<br></br>
                        성혜린 
                    </div>
                </div>   
            </div>     
      </div>  
    </div>
    </div>
  );
}

export default Eventinformation;






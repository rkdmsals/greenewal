import React from 'react';
import './eventinformationstyle.css'
import Footer from "../../Others/Footer";


const Eventinformation = () => {
  return (
    <div>
    <div className="eventinformation-container">
      <div className="titletext">About<br></br>Green-ewal</div>
      <img src="/img/eventinformation/title.png" alt="반짝이" className="ei-title-image" />
      <div className="eiposter">
            <img src="/img/eventinformation/leftposter.png" alt="poster" className="leftposter-image"/>
            <img src="/img/eventinformation/poster.png" alt="poster" className="poster-image"/>
            <img src="/img/eventinformation/rightposter.png" alt="poster" className="rightposter-image"/>
      </div>  
      <div className="postertext">
                새로워진 이화이언!<br></br>
                이화이언의 리뉴얼을 기념하여<br></br>
                Green-ewal 행사가 이삼봉홀에서 진행됩니다.
       </div>
      <div className="date">
        <div className="ei-title">
            <img src="/img/eventinformation/clover.png" alt="클로버" className="ei-clover-image"/>
            <div className="eitxt">행사 일시</div>
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


       
      <img src="/img/eventinformation/line.png" alt="구분선" className="line-image"/>
      
      <div className="map">
            <div className="ei-title">
                <img src="/img/eventinformation/clover.png" alt="클로버" className="ei-clover-image"/>
                <div className="eitxt">찾아오시는 길</div>
            </div>
            <div className="maptext">
                <div className="maptext1">
                    이화여자대학교 ECC B4층 이삼봉홀
                </div>
                <div className="maptext2">
                    : 스타벅스 ECC점 옆, ECC N번 출구 근처
                </div>
            </div>
            <img src="/img/eventinformation/map.png" alt="지도" className="map-image"/>
      </div>  

      <img src="/img/eventinformation/line.png" alt="구분선" className="line-image"/>

      <div className="help">
            <div className="ei-title">
                <img src="/img/eventinformation/clover.png" alt="클로버" className="ei-clover-image"/>
                <div className="eitxt">도움주신 분들</div>
            </div>
            <img  alt="헬퍼로고" className="hleplogo-image"/>
      </div>
      <img src="/img/eventinformation/line.png" alt="구분선" className="line-image"/>
      <div className="aboutmanagement">
            <div className="ei-title">    
                <img src="/img/eventinformation/clover.png" alt="클로버" className="ei-clover-image"/>
                <div className="eitxt">어바웃 운영진</div>
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
    <Footer />
    </div>
  );
}

export default Eventinformation;






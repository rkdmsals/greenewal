import React from 'react';
import './eventstyle.css';
import Header from "../../Others/Header"

const Event = () => {
  return (
    <div>
    <div className="event-container">
      <div className="titletext">Event Info</div>
      <img src="/img/event/title.png" alt="반짝이" className="event-title-image" />
    
      <div className="topep">
        &lt;그-리뉴얼&gt; 에서 이화이언이 준비한 다양한 이벤트!<br></br>
        참여하고 선물받자!
      </div>

      <div className="stamp">
        <img src="/img/event/n1.png" alt="" className="n1-image" />
        <div className="e-t-txt">
            <div className="sort">
                오프라인
            </div>
            <div className="event-title">
                모아모아 도장판
            </div>
        </div>    
        <div className="eventep">
            <div className="stamp-eventep">
            퀴즈 부스와 오프라인 부스에서 도장을 모으면<br></br>
            화려한 구성의 선물이 주어집니다!
            </div>
        </div>    
      </div>

      <div className="bestdresser">
            <img src="/img/event/n2.png" alt="" className="n2-image" />
            <div className="e-t-txt">
                <div className="sort">
                    오프라인
                </div>
                <div className="event-title">
                    베스트 드레서
                </div>
            </div>    
            <div className="eventep">
                <div className="bestdresser-eventep">
                    이화이언의 뉴 컬러, 이화그린!<br></br>
                    초록색 옷을 입고 온 이화인들에게 간단한 선물 증정!
                </div>
            </div>
        </div>  

      <div className="inssupl">
            <img src="/img/event/n3.png" alt="" className="n3-image" />
            <div className="e-t-txt">
                <div className="sort">
                    오프라인&온라인   
                </div>
                <div className="event-title">
                    인스타 스토리 업로드
                </div>
            </div>    
            <div className="eventep">
                <div className="inssupl-eventep">
                    이벤트 설명. 이벤트 설명. 이벤트 설명. 이벤트 설명.이벤트 설명. 이벤트 설명. 이벤트 설명. 이벤트 설명.
                </div>
            </div>
            <div className="instarlink">   
                <a href="https://www.instagram.com/ewhaian_2001/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank" rel="noopener noreferrer">
                    <div className="instarlinktxt">
                        이화이언 인스타그램<br></br>바로가기
                    </div>
                    <img src="/img/event/instarlink.png" alt="인스타 화살표" className="instarlink-image" />
                </a>
            </div>
        </div>  
        </div>  
    </div>
  );
}

export default Event;


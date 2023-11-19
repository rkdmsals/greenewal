import React from 'react';
import './eventstyle.css';

const Event = () => {
  return (
    <div className="event-container">
      <div>
        <img src="/img/previous.png" alt="뒤로가기" className="previous-image" />
        <div className="headertxt">부스 상세보기</div>
        <img src="/img/bar.png" alt="bar" className="bar-image" />
      </div>
      
      <div className="titletext">Event Info</div>
      <img src="/img/title.png" alt="bar" className="title-image" />
    
      <div className="topep">
            퀴즈 부스와 오프라인 부스에서 도장을 모으면<br></br>
            화려한 구성의 선물이 주어집니다!
      </div>

      <div className="stamp">
        <img src="/img/n1.png" alt="" className="n1-image" />
        <div className="sort">
            <div className="stamp-sort">
                오프라인
            </div>    
        </div>
        <div className="title">
            <div className="stamp-title">
                모아모아 도장판
            </div>
        </div>
        <div className="eventep">
            <div className="stamp-eventep">
            퀴즈 부스와 오프라인 부스에서 도장을 모으면<br></br>
            화려한 구성의 선물이 주어집니다!
            </div>
        </div>
        <img src="/img/stamp.png" alt="스탬프 이미지" className="stamp-image"/>
            

      </div>

      <div className="bestdresser">
            <img src="/img/n2.png" alt="" className="n2-image" />
            <div className="sort">
                <div className="bestdresser-sort">
                    오프라인
                </div>    
            </div>
            <div className="title">
                <div className="search-title">
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
            <img src="/img/n3.png" alt="" className="n3-image" />
            <div className="sort">
                <div className="inssupl-sort">
                    오프라인&온라인
                </div>    
            </div>
            <div className="title">
                <div className="inssupl-title">
                인스타 스토리 업로드
                </div>
            </div>
            <div className="eventep">
                <div className="inssupl-eventep">
                이벤트 설명. 이벤트 설명. 이벤트 설명. 이벤트 설명.이벤트 설명. 이벤트 설명. 이벤트 설명. 이벤트 설명.
                </div>
            </div>
            <div className="instarlink">
                <div className="instarlinktxt">
                    이화이언 인스타그램<br></br>바로가기
                </div>
                <img src="/img/instarlink.png" alt="인스타 화살표" className="instarlink-image" />
            </div>
        </div>  
    </div>
  );
}

export default Event;


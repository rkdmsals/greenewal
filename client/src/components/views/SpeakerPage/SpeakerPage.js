import "./SpeakerPage.css";
import React from 'react';

function SpeakerPage() {
    return (
    <div className="speakerPage_background">
        <div className="speakerPage_main_container">
            <div className="timeTable_container">
            <div className="timeTable_title">
                <div>Timeline</div><img className="dia_img" src="img/SpeakerPage/dia.png" />
            </div>
            <div className="timeTable_background" style={{ 
            backgroundImage: `url("/img/SpeakerPage/clober1.png")` 
            }}>
                <div className="timeTable_content_container">
                    <div className="timeTable_content">
                        <div>00:00 - 00:00</div>
                        <div className="timeTable_content_name">
                            <img className="clober_img" src="img/SpeakerPage/clober2.png" />
                            <div>이주미 변호사</div>
                        </div>
                    </div>
                    <div className="timeTable_break">
                        <div class="division_line"></div>
                        <div>Break Time</div>
                        <div class="division_line"></div>
                    </div>
                    <div className="timeTable_content">
                        <div>00:00 - 00:00</div>
                        <div className="timeTable_content_name">
                            <img className="clober_img" src="img/SpeakerPage/clober2.png" />
                            <div>전효진 변호사</div>
                        </div>
                    </div>
                    <div className="timeTable_break">
                    <div class="division_line"></div>
                        <div>Break Time</div>
                        <div class="division_line"></div>
                    </div>
                    <div className="timeTable_content">
                        <div>00:00 - 00:00</div>
                        <div className="timeTable_content_name">
                            <img className="clober_img" src="img/SpeakerPage/clober2.png" />
                            <div>이주미 변호사</div>
                        </div>
                    </div>
                </div>

            </div>

            </div>

            <div className="speakerInfo_container">
                <div className="speakerInfo_title">
                    <div>Speaker Info</div><img className="arrow_img" src="img/SpeakerPage/arrow_btn.png" />
                </div>

                <div className="speakerInfo" id="speakerInfo_1">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_name">이주미</div>
                        <div className="speakerInfo_topic_content">강연주제강연주제강연주제</div>
                    </div>
                    
                </div>





            </div>
        </div>
    </div>
    
        )
}
export default SpeakerPage;
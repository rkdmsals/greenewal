import "./SpeakerDetailPage.css";
import React from 'react';
import { ReactComponent as Dia } from "../../../../assets/images/SpeakerPage/dia.svg";
import { ReactComponent as Speaker_1 } from "../../../../assets/images/SpeakerPage/speaker1.svg";
import { ReactComponent as Speaker_2 } from "../../../../assets/images/SpeakerPage/speaker2.svg";

function SpeakerDetailPage() {

    return(
        <div className="speakerDetailPage_background">
            <div className="speakerInfo_title">
                <div>Speaker Info</div>
                <div className="dia_svg"><Dia /></div>
            </div>
            <div className="speakerDetailInfo" id="speakerInfo_1">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_detail_name">이주미<div className="speakerInfo_job">변호사</div></div>
                        <div className="speakerInfo_detail_content">
                            現 법무법인 두우 <br />
                            現 경기도 남양주시 고문 변호사 <br />
                            前 법무법인 정향 소속변호사 <br />
                            제10회 변호사시험 합격
                        </div>
                        <div className="speakerInfo_detail_topic">강연 주제</div>
                        <div className="speakerInfo_detail_topic_content">강의 주제 강의 주제</div>
                        <div className="speaker_detail_svg1"><Speaker_1 /></div>
                    </div>
                    
                </div>
                <div className="speakerDetailInfo" id="speakerInfo_2">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_detail_name speakerInfo_detail_name_2">전효진<div className="speakerInfo_job">강사·변호사</div></div>
                        <div className="speakerInfo_detail_content speakerInfo_detail_content_2">
                            現 메가 공무원 강사 <br />
                            現 미래인재컴퍼니 강사 <br />
                            前 공단기 강사 <br />
                            제 39기 사법연수원 수료
                        </div>
                        <div className="speakerInfo_detail_topic">강연 주제</div>
                        <div className="speakerInfo_detail_topic_content">강의 주제 강의 주제</div>
                        <div className="speaker_detail_svg2"><Speaker_2 /></div>


                    </div>
                    
                </div>
                <div className="speakerDetailInfo" id="speakerInfo_3">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_detail_name">이주미<div className="speakerInfo_job">변호사</div></div>
                        <div className="speakerInfo_detail_content">
                            現 법무법인 두우 <br />
                            現 경기도 남양주시 고문 변호사 <br />
                            前 법무법인 정향 소속변호사 <br />
                            제10회 변호사시험 합격
                        </div>
                        <div className="speakerInfo_detail_topic">강연 주제</div>
                        <div className="speakerInfo_detail_topic_content">강의 주제 강의 주제</div>
                        <div className="speaker_detail_svg3"><Speaker_1 /></div>
                    </div>
                    
                </div>





        </div>
    )
}

export default SpeakerDetailPage;
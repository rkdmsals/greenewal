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
            <div className="speakerInfo" id="speakerInfo_1">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_name speakerInfo_name_1">이주미</div>
                        <div className="speakerInfo_topic_content">강연주제</div>
                        <div className="speaker_svg1"><Speaker_1 /></div>
                    </div>
                    
                </div>
                <div className="speakerInfo" id="speakerInfo_2">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_name speakerInfo_name_2">전효진</div>
                        <div className="speakerInfo_topic_content speakerInfo_topic_content_2">강연주제</div>
                        <div className="speaker_svg2"><Speaker_2 /></div>
                    </div>
                    
                </div>
                <div className="speakerInfo" id="speakerInfo_3">
                    <div className="speakerInfo_content">
                        <div className="speakerInfo_name speakerInfo_name_3">이주미</div>
                        <div className="speakerInfo_topic_content">강연주제</div>
                        <div className="speaker_svg3"><Speaker_2 /></div>
                    </div>
                    
                </div>





        </div>
    )
}

export default SpeakerDetailPage;
import "./SpeakerPage.css";
import React from 'react';

function SpeakerPage() {
    return (
    <div className="speakerPage_background">
        <div className="speakerPage_main_container">
            <div className="timeTable_container">
                <div className="timeTable_title">TIME TABLE</div>
                <div className="timeTable_date">11/00 FRI</div>
                <table className="timeTable">
                    <tr className="timeTable_1">
                        <td>00:00 - 00:00</td>
                        <td>김이화 연사님</td>
                    </tr>
                    <tr className="timeTable_2">
                        <td>00:00 - 00:00</td>
                        <td>BREAK TIME</td>
                    </tr>
                    <tr className="timeTable_1">
                        <td>00:00 - 00:00</td>
                        <td>김이화 연사님</td>
                    </tr>
                    <tr className="timeTable_2">
                        <td>00:00 - 00:00</td>
                        <td>BREAK TIME</td>
                    </tr>
                    <tr className="timeTable_1">
                        <td>00:00 - 00:00</td>
                        <td>김이화 연사님</td>
                    </tr>

                </table>

            </div>

            <div className="speakerInfo_container">

                <div className="speakerInfo_title">연사님 소개</div>
                <div className="speakerInfo_1">
                    <img src="img/SpeakerPage/Ellipse.png" />
                    <div src="speakerInfo_name">김이화</div>
                    <div src="speakerInfo_desc">김이화</div>
                    <div src="speakerInfo_topic">강연 주제</div>
                    <div src="speakerInfo_topic_content">주제에 대하여 작성</div>

                </div>



            </div>
        </div>
    </div>
    
        )
}
export default SpeakerPage;
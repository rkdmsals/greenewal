import "./SpeakerPage.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";
import { ReactComponent as Speaker_1 } from "../../../assets/images/SpeakerPage/speaker1.svg";
// import { ReactComponent as Speaker_3 } from "../../../assets/images/SpeakerPage/speaker3.svg";

function SpeakerPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        // '/speaker/detail'로 페이지 이동
        navigate('/speaker/detail');
    };
    return (
        <div className="speakerPage_background">
            <div className="speakerPage_main_container">
                <div className="timeTable_container">
                    <div className="timeTable_title">
                        <div>Timeline</div>
                        <div className="dia_svg"><Dia /></div>
                    </div>
                    <div className="timeTable_background" style={{
                        backgroundImage: `url("/img/SpeakerPage/clober1.png")`
                    }}>
                        <div className="timeTable_content_container">
                            <div className="timeTable_content">
                                <div>17:30 - 18:20</div>
                                <div className="timeTable_content_name">
                                    {/* <img className="clober_img" src="img/SpeakerPage/clober2.png" /> */}
                                    <div>전효진 변호사</div>
                                </div>
                            </div>
                            <div className="timeTable_break">
                                <div className="division_line"></div>
                                <div>Break Time</div>
                                <div className="division_line"></div>
                            </div>
                            <div className="timeTable_content">
                                <div>18:30 - 19:20</div>
                                <div className="timeTable_content_name">
                                    {/* <img className="clober_img" src="img/SpeakerPage/clober2.png" /> */}
                                    <div>이주미 변호사</div>
                                </div>
                            </div>
                            <div className="timeTable_break">
                                <div className="division_line"></div>
                                <div>Break Time</div>
                                <div className="division_line"></div>
                            </div>
                            <div className="timeTable_content">
                                <div>19:30 - 20:20</div>
                                <div className="timeTable_content_name">
                                    {/* <img className="clober_img" src="img/SpeakerPage/clober2.png" /> */}
                                    <div>노슈니 크리에이터</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="speakerInfo_container">
                    <div className="speakerInfo_title">
                        <div>Speaker Info</div><img className="arrow_img" src="img/SpeakerPage/arrow_btn.png" onClick={handleClick} />
                    </div>
                    <div className="x_scroll">
                        <div className="speakerInfo" id="speakerInfo_1">
                            <div className="speakerInfo_content">
                                <div className="speakerInfo_name speakerInfo_name_1">전효진</div>
                                <div className="speakerInfo_topic_content">변호사 합격, <br />그 이후</div>
                                <div className="speaker_svg1"><Speaker_1 /></div>
                            </div>

                        </div>
                        <div className="speakerInfo" id="speakerInfo_2">
                            <div className="speakerInfo_content">
                                <div className="speakerInfo_name speakerInfo_name_2">이주미</div>
                                <div className="speakerInfo_topic_content speakerInfo_topic_content_2">본래 내가 바라던<br /> 것은 변호사가<br />아니었다.</div>
                                <div className="speaker_svg2"><img className="speaker_img2" src="/img/SpeakerPage/speaker2.png" alt="speaker2" /></div>
                            </div>

                        </div>
                        <div className="speakerInfo" id="speakerInfo_3">
                            <div className="speakerInfo_content">
                                <div className="speakerInfo_name speakerInfo_name_3">노슈니</div>
                                <div className="speakerInfo_topic_content">노션 초보자들을 <br /> 위한 포트폴리오 작성 꿀팁</div>
                                {/* <div className="speaker_svg3"><Speaker_3 /></div> */}
                                <div className="speaker_svg3"><img className="speaker_img3" src="/img/SpeakerPage/speaker3.png" alt="speaker3"/></div>
                            </div>

                        </div>
                    </div>





                </div>
            </div>
        </div>

    )
}
export default SpeakerPage;
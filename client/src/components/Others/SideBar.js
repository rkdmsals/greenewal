import { Link } from "react-router-dom";
import "./SideBar.css";
import { useState, useEffect } from "react";
import { auth } from '../../_actions/user_action';
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SideBar({ show }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [userName, setUserName] = useState("김이화")
    // const [showSideBar, setShowSideBar] = useState({ show })

    useEffect(() => {
        dispatch(auth()).then(response => {
            if (!response.payload.isAuth) {
                return 
            } else { console.log(response.payload.name)
            setUserName(response.payload.name);
            }
        })
    })

    return (
        <div className={show ? 'sidebar active' : 'sidebar'} >
            <div className="SideBar_inner">
                <div className="SideBar_inner_header">
                    <div className="hello">
                        <div> 안녕하세요, </div>
                        <div className="hello_name">
                            <div> {userName} 님</div>
                            <img src="/img/SideBar/ewhaian_icon.png" alt="icon" className="icon" />
                        </div>
                    </div>
                    <div className="border"></div>
                </div>
                <div className="sidebar_ticket" onClick={() => navigate('/ticket')}>
                    <div className="ticket_title">
                        <img src="/img/SideBar/ticket_icon.png" alt="ticket" className="ticket_icon" />
                        <div>나의 티켓</div>
                    </div>
                    <img src="/img/SideBar/ticket_pic.png" alt="ticket" className="ticket_pic" />
                </div>
                <ul>
                    <li>
                        <Link to="/">행사 정보</Link>
                    </li>
                    <li className="booth">
                        <div className="booth_tap" onClick={() => setShowSubMenu(!showSubMenu)}>부스 정보</div>
                        <div className={showSubMenu ? 'submenu active' : 'submenu'}>
                            <Link className="sub" to="/login">네컷사진 부스</Link>
                            <Link className="sub" to="/login">퀴즈,게임 부스</Link>
                            <Link className="sub" to="/login">먹거리 부스</Link>
                            <Link className="sub" to="/login">리뉴얼 부스</Link>
                            <Link className="sub" to="/login">운영진 부스</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/login">강연 정보</Link>
                    </li>
                    <li>
                        <Link to="/register">이벤트 정보</Link>
                    </li>
                    <li>
                        <Link to="/">지난 굿즈 상점</Link>
                    </li>
                </ul>

            </div>

        </div>)
}

export default SideBar
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
    const [userName, setUserName] = useState("")
    const [isTicket, setIsTicket] = useState(false);
    const [isAuth, setAuth] = useState(false);
    // const [showSideBar, setShowSideBar] = useState({ show })

    useEffect(() => {
        dispatch(auth()).then(response => {
            if (!response.payload.isAuth) {
                setAuth(response.payload.isAuth)
                return;
            } else {
                // console.log(response.payload)
                setUserName(response.payload.name);
                setIsTicket(response.payload.Ticket);
                setAuth(response.payload.isAuth)
            }
        })
    })
    const onClickHandler = () => {
        Axios.get('/api/logout')
            .then(response => {
                if (response.data.success) {
                    // console.log("성공");
                    navigate("/")
                    return;
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }

    return (
        <div className={show ? 'sidebar active' : 'sidebar'} >
            <div className="SideBar_inner">
                <div className="SideBar_inner_header">
                    {isAuth ? <div className="hello">
                        <div> 안녕하세요, </div>
                        <div className="hello_name">
                            <div> {userName} 님</div>
                            <img src="/img/SideBar/ewhaian_icon.png" alt="icon" className="icon" />
                            <div className="LogOutBtn" onClick={onClickHandler}>
                                로그아웃
                            </div>
                        </div>
                    </div> : <div className="hello"><div className="NavLogin" onClick={() => navigate("/login")}>로그인</div></div>}

                    <div className="border"></div>
                </div>
                <div className="sidebar_ticket" >
                    <div className="ticket_title" >
                        <img src="/img/SideBar/ticket_icon.png" alt="ticket" className="ticket_icon" onClick={() => { if (isAuth) { navigate('/ticket') } else { alert("로그인 후 이용해주세요") } }} />
                        <div onClick={() => { if (isAuth) { navigate('/ticket', { state: isTicket }) } else { alert("로그인 후 이용해주세요") } }}>나의 티켓</div>
                        <div id="GoToOrder" onClick={() => { navigate("/checkOrder") }}>주문 내역</div>
                    </div>

                    {isAuth && isTicket ? <img src="/img/SideBar/ticket_pic.png" alt="ticket" className="ticket_pic" onClick={() => { navigate('/ticket', { state: isTicket }) }} />
                        : <div></div>}
                </div>
                <ul>
                    <li>
                        <Link to="/eventinfo">행사 정보</Link>
                    </li>
                    <li className="booth">
                        <div className="booth_tap" onClick={() => setShowSubMenu(!showSubMenu)}>부스 정보</div>
                        <div className={showSubMenu ? 'submenu active' : 'submenu'}>
                            <Link className="sub" to="/booth">전체 부스 정보</Link>
                            <Link className="sub" to="/photo">네컷사진 부스</Link>
                            {/* <Link className="sub" to="/quizgame">퀴즈,게임 부스</Link> */}
                            <Link className="sub" to="/foods">먹거리 부스</Link>
                            <Link className="sub" to="/renewal">리뉴얼 부스</Link>
                            {/* <Link className="sub" to="/login">운영진 부스</Link> */}
                        </div>
                    </li>
                    <li>
                        <Link to="/speaker">강연 정보</Link>
                    </li>
                    <li>
                        <Link to="/event">이벤트 정보</Link>
                    </li>
                    <li>
                        <Link to="/shop">지난 굿즈 상점</Link>
                    </li>
                </ul>

            </div>

        </div >)
}

export default SideBar
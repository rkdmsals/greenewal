import React, { useState } from 'react';
import "./TicketPage.css";
import { auth } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function TicketPage() {
    const dispatch = useDispatch();
    const location = useLocation;
    const navigate = useNavigate();
    const [isTicket, setIsTicket] = useState(false);
    if (location.state.isTicket) { setIsTicket(location.state.isTicket); }

    //여기서 비번 입력하면 isAuth 설정되도록!!
    //비번은 음.."RMFLSBDJF1127"
    console.log(isTicket)
    return (<div>
        <div className={isTicket ? "Show" : "DontShow"}>
            <div className='CheckTicket'></div>
            <div className='TicketPage_background'>
                <div className='TicketPage_title'>
                    <div> Ticket </div>
                    <div className='dia'><Dia /></div>
                </div>
                <img src="/img/Ticket/ticket.png" alt='ticket' className='ticket' />
                <img src='/img/Ticket/nav_speaker.png' alt='nav_speaker' className='nav_speaker'
                    onClick={() => navigate("/speaker")}
                />
            </div>
        </div>
    </div>

    )
}

export default TicketPage;
import React from 'react';
import "./TicketPage.css";
//import { useState } from "react";
//import { auth } from '../../../_actions/user_action';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";
import { useNavigate } from 'react-router-dom';

function TicketPage() {

    const navigate = useNavigate();

    return(
        <div className='TicketPage_background'>
            <div className='TicketPage_title'>
            <div> Ticket </div>
            <div className='dia'><Dia /></div>
            </div>
           <img src="/img/Ticket/ticket.png" alt='ticket' className='ticket' />
           <img src='/img/Ticket/nav_speaker.png' alt='nav_speaker' className='nav_speaker'
           onClick={() =>navigate("/speaker")} 
           />

        </div>
    )
}

export default TicketPage;
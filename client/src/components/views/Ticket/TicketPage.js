import React from 'react';
import "./TicketPage.css";
import { useState } from "react";
import { auth } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";

function TicketPage(props) {

    const dispatch = useDispatch();

    const [userseatnum, setuserseatnum] = useState("A1")
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    

    useEffect(() => {

        dispatch(auth()).then(response => {
            console.log(response.payload.seatNumber)
            setuserseatnum(response.payload.seatNumber);
        })


    }, [])

    return(
        <div className='TicketPage_background'>
            <div className='TicketPage_title'>
            <div> Ticket </div>
            <div className='dia'><Dia /></div>
            </div>
           <img src="/img/Ticket/ticket.png" alt='ticket' className='ticket' />
           <img src='/img/Ticket/check_seat.png' alt='checkSeatNum' className='checkSeatNum' 
            onClick={toggleModal}
           />

            {modal && (
            
            <div className='modal'>
               <div className='overlay' onClick={toggleModal}></div>
               <div className='modal-content'>
                   내 좌석번호는
               {userseatnum} 입니다.
               </div>
               <img src='/img/SideBar/stop_icon.png' alt='stop' className='close-modal' 
                onClick={toggleModal}
               />
           </div>
            )}
            
        </div>
    )
}

export default TicketPage;
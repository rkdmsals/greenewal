import React from 'react';
import "./TicketPage.css";
import { useState } from "react";
import { auth } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function TicketPage(props) {

    const dispatch = useDispatch();

    const [userseatnum, setuserseatnum] = useState("A1")

    useEffect(() => {

        dispatch(auth()).then(response => {
            console.log(response);
            setuserseatnum(response.payload.seatNumber);
        })


    }, [])

    return(
        <div className='TicketPage_background'>
           <div> Ticket </div>
           <img src="/img/Ticket/ticket.png" alt='ticket' className='ticket' />
           <img src='/img/Ticket/check_seat.png' alt='check' className='check' />

           <div className='seatnum'> {userseatnum}
           <br />
           좌석 확인
            </div>


        </div>
    )
}

export default TicketPage;
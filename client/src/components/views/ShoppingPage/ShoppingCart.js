import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';

function ShoppingCart() {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(1);

    useEffect(() => {
        dispatch(auth()).then(response => {
            console.log(response.payload.name);
            console.log(response.payload.id);
            setUserId(response.payload.id);
        })
    })

    return (
        <div className='Cart'>
            쇼핑카트
        </div>)
}
export default ShoppingCart;
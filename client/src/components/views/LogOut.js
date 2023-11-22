import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogOut(porps) {

    const navigate = useNavigate();

    const onClickHandler = () => {
        axios.get('/api/logout')
            .then(response => {
                if (response.data.success) {
                    navigate('/login');
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }

            })
    }


    return (
        <div>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}
export default LogOut;
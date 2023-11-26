import React, { useState } from 'react';
import "./LoginPage.css";
//import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../_actions/user_action';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")

    const onIDHandler = (event) => {
        setID(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            id: ID,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    window.history.back();
                } else {
                    alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.')
                }
            })
    }
    useEffect(() => {
        dispatch(auth()).then(response => {
            // console.log(response)
            if (!response.payload.isAuth) {
                return
            } else {
                //로그인 되어있는 유저일 경우, 그 전 페이지로 이동시킴
                window.history.back();
            }
        })
    })

    return (
        <div className='LoginPage_background'>
            <div className='LoginPage_title'> Login</div>
            <form className='Login'
                onSubmit={onSubmitHandler}
            >
                <div className='login_container'>
                    <div className='inputset'>
                        <div className='login_label'>Ewhaian ID</div>
                        <input className="login_input" type="ID" value={ID} onChange={onIDHandler} />
                    </div>
                    <div className='inputset'>
                        <div className='login_label'>Password</div>
                        <input className="login_input" type="password" value={Password} onChange={onPasswordHandler} />
                    </div>

                    <br />
                    <button className="btn_login" type='submit'>
                        로그인
                    </button>
                    <Link className='nav_register' to="/register"> 회원가입 </Link>

                    <div className='LoginText'>
                        <div className='LoginText_title'>안내사항</div>
                        Greenewal 행사사이트 계정은 이화이언 계정과 연동되지 않습니다.
                        굿즈 구매 등의 편의를 위해 이화이언 아이디를 기재하는 것으로 해두었으니, 이용에 참고 바랍니다</div>
                </div>

            </form>
        </div>
    )
}
export default LoginPage;
import React, { useState } from 'react';
import "./LoginPage.css";
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


function LoginPage(props) {
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
            if(response.payload.loginSuccess) {
              navigate('/');  
            } else {
                alert('Error')
            }
        })

        

    }

    useEffect(() => {

        dispatch(auth()).then(response => {
            console.log(response)

            if(!response.payload.isAuth) {
                return
            } else{
                navigate('/');
            }
        })


    }, [])


    return (
   <div className='LoginPage_background'>
       <div className='LoginPage_title'> Login</div>
       <form className='Login'
            onSubmit={onSubmitHandler}
        >
            <div className='login_container'>
            <div className='inputset'>
            <div className='login_label'>Ewhaian ID</div>
           <input className="ID_input" type="ID" value={ID} onChange={onIDHandler} />
            </div>
            <div className='inputset'>
            <div className='login_label'>Password</div>
           <input className="Password_input" type="password" value={Password} onChange={onPasswordHandler} />
            </div>
          
           <br />
           <button className="btn_login" type='submit'>
               로그인
           </button>
           <Link className='nav_register' to="/register"> 회원가입 </Link>
            </div>
           
       </form>
   </div>
    )
}
export default LoginPage;
import React, { useState } from 'react';
import "./LoginPage.css";
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import { useEffect } from 'react';


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
       <form className='Login'
            onSubmit={onSubmitHandler}
        >
           <label>Ewhaian ID</label>
           <input type="ID" value={ID} onChange={onIDHandler} />
           <label>Password</label>
           <input type="password" value={Password} onChange={onPasswordHandler} />
           <br />
           <button type='submit'>
               Login
           </button>
       </form>
   </div>
    )
}
export default LoginPage;
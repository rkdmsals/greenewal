import React, { useState } from 'react';
import "./LoginPage.css";
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';


function LoginPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ID, setID] = useState("")
    const [StudentID, setStudentID] = useState("")
    const [Password, setPassword] = useState("")

    const onIDHandler = (event) => {
        setID(event.currentTarget.value)
    }
    const onStudentIDHandler = (event) => {
        setStudentID(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            id: ID,
            studentID: StudentID,
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

    return (
   <div className='LoginPage_background'> 
       <form className='Login'
            onSubmit={onSubmitHandler}
        >
           <label>ID</label>
           <input type="ID" value={ID} onChange={onIDHandler} />
           <label>StudentID</label>
           <input type="StudentID" value={StudentID} onChange={onStudentIDHandler} />
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
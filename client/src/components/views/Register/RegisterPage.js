import React, {useState} from 'react';
import "./RegisterPage.css";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../_actions/user_action';
import { useEffect } from 'react';


function RegisterPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ID, setID] = useState("")
    const [Name, setName] = useState("")
    const [StudentID, setStudentID] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onIDHandler = (event) => {
        setID(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onStudentIDHandler = (event) => {
        setStudentID(event.currentTarget.value)
    }
    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            name: Name,
            id: ID,
            studentID: StudentID,
            phoneNumber: PhoneNumber,
            password: Password
        }

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
              navigate('/login');  
            } else {
                alert('Failed to sign up')
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
        <div className='RegisterPage_background'> 
        <form className='Register'
             onSubmit={onSubmitHandler}
         >
            <label>Name</label>
            <input type="text" value={Name} onChange={onNameHandler} />

            <label>Ewhaian ID</label>
            <input type="ID" value={ID} onChange={onIDHandler} />

            <label>StudentID</label>
            <input type="StudentID" value={StudentID} onChange={onStudentIDHandler} />

            <label>phoneNumber</label>
            <input type="phoneNumber" value={PhoneNumber} onChange={onPhoneNumberHandler} />

            <label>Password</label>
            <label>5자 이상이여야 합니다.</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />

            <label>Confirm Password</label>
            <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

            <br />
            <button type='submit'>
                회원가입
            </button>
        </form>
    </div>
    )
}

export default RegisterPage;
import "./Feedback.css";
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";
import { auth } from '../../../_actions/user_action';

const Feedback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Content, setContent] = useState("")
    const [feedbacks, setFeedbacks] = useState([]);
    const [StudentID, setStudentID] = useState("")
    useEffect(() => {
        dispatch(auth()).then(response => {
            console.log(response);

            if (response.payload.isAuth) {
                setStudentID(response.payload.studentID);
                console.log(response.payload.studentID);
                return
            } else {
                navigate('/login');
            }
        })

    }, [])
    useEffect(() => {
        axios.get('/api/feedback/read')
            .then(response => {
                console.log(response.data);
                setFeedbacks(response.data);
            });
    }, []);

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value)
    }
    const deleteClick = (e) => {
        console.log(e.target.id)
        axios.delete('/api/feedback/delete', { data : { _id : e.target.id } })
        .then(() => {
          console.log('delete성공');
          window.location.reload(); // 삭제 성공 후 페이지 새로고침
        })
        .catch(() => {
          console.log('delete실패');
        })
      }
    const onSubmitHandler = (event) => {
        //event.preventDefault();

        axios.post('/api/feedback/upload', {
            content: Content,
            studentID: StudentID
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="fb_main_container">
            <div className="fb_title_container">
                <div className="fb_title">Feedback <br /> To Ewhaian <div className="fb_dia_svg"><Dia /></div> </div>
                <div className="fb_title_content">22주년을 맞이해 새롭게 단장한 이화이언에게 <br /> 하고싶은 말을 들려주세요!</div>
            </div>

            <div className="fb_main_content_container">
            <div className="fb_main_content_inner_container">
            <div className="fb_main_content_inner_inner_container">
                <ul className="fb_main_content_list">
                {feedbacks ? feedbacks.map((feedback, i) => (
                    <li className={`fb_main_content ${feedback.studentID === StudentID ? 'highlight' : ''}`} key={feedback._id}>
                        {feedback.content} {feedback.studentID == StudentID && (
                            <img id={feedback._id} onClick={deleteClick} className="fb_del_btn_img" 
                            src="/img/Feedback/del_button.png" />

                        )}
                    </li>
                )): <div></div>}
                </ul>
            </div>
            
             
        <div className="add_feedback_container">
        <form className='add_feedback'
            onSubmit={onSubmitHandler}
        >
            <div className='fb_content_input_container'>
            <div className='fb_content_inputset'>
            
           <input className="fb_content_input" type="text" minLength="5" maxLength="300"
           placeholder="피드백을 입력해 주세요. (5-300자)"
           value={Content} onChange={onContentHandler} />
           <button className="btn_add_fb" type='submit'>
               <img className="fb_btn_img" src="/img/Feedback/button.png" />
           </button>
            </div>
            </div>
           
       </form>
       </div>
       </div>
       </div>
        
        </div>

    );
}

export default Feedback;
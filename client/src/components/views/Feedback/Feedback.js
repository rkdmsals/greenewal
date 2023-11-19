import "./Feedback.css";
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/feedback')
            .then(response => {
                console.log(response.data)
                setFeedbacks(response.data);
            });
    }, []);
    return (
        <div><h1>Feedback</h1>
            <div> 
                {feedbacks && <textarea value={JSON.stringify(feedbacks)} readOnly={true}/>}</div>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>
                        {feedback.content} ({feedback.createdAt})
                    </li>
                ))}
            </ul>
        
        </div>
        
    );
}

export default Feedback;
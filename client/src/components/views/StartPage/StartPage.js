import "./StartPage.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate = useNavigate();

    const handleClick = () => {
      // '/start'로 페이지 이동
      navigate('/start');
    };
    return(
        <div className="startPage_background">
            <div className="startPage_container">
            <img className="clober_white" src="img/StartPage/clober_white.png" />
            <div className="startPage_title_container">
                <div className="startPage_title">
                    <div className="startPage_ewhaian">Ewhaian</div>
                    <div className="startPage_green">Green-ewal</div>
                    <div className="startPage_restart_container">
                        <div className="startPage_restart" onClick={handleClick}>RE START</div>
                        <img className="arr_white" src="/img/StartPage/arr_white.png" onClick={handleClick}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StartPage;
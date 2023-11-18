import "./StartPage.css";
import React from 'react';

function StartPage() {

    return(
        <div className="startPage_background">
            <div className="startPage_container">
            <img className="clober_white" src="img/StartPage/clober_white.png" />
            <div className="startPage_title_container">
                <div className="startPage_title">
                    <div className="startPage_ewhaian">Ewhaian</div>
                    <div className="startPage_green">Green-ewal</div>
                    <div className="startPage_restart">RE START</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StartPage;
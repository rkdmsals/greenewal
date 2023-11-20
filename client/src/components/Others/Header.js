import SideBar from "./SideBar"
import { useState } from "react";
import $ from "jquery"
import "./Header.css"
function Header() {
    const [showSideBar, setShowSideBar] = useState(false)
    const goBack = () => {
        window.history.back();
    }
    return (<div className="HeaderAll">

        <div className="BackBtn" onClick={goBack}></div>
        <div className="PageName">페이지 이름</div>
        <img src="img/menu_navigation.png" alt='sidebaricon' className="sidebaricon"
            onClick={() => {
                setShowSideBar(true);
                setTimeout(() => {
                    $(".HideSide").css("display", "inline-block")
                }, 850);
            }}
        />
        < SideBar show={showSideBar} />
        <div className="HideSide" onClick={() => {
            setShowSideBar(false);
            $(".HideSide").css("display", "none")
        }}></div>
    </div>)
}

export default Header;
import SideBar from "./SideBar"
import { useState } from "react";
import $ from "jquery"
function Header() {
    const [showSideBar, setShowSideBar] = useState(false)

    return (<div style={{ height: "50px" }}>
        < SideBar show={showSideBar} />
        <img src="img/menu_navigation.png" alt='sidebaricon' className="sidebaricon"
            onClick={() => {
                setShowSideBar(true);
                setTimeout(() => {
                    $(".HideSide").css("display", "inline-block")
                }, 850);
            }}
        />
        <div className="HideSide" onClick={() => {
            setShowSideBar(false);
            $(".HideSide").css("display", "none")
        }}>x</div>
    </div>)
}

export default Header;
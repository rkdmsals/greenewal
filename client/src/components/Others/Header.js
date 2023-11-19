import SideBar from "./SideBar"
import { useState } from "react";
function Header() {
    const [showSideBar, setShowSideBar] = useState(false)

    return (<div>
        < SideBar show={showSideBar} />
        <img src="img/menu_navigation.png" alt='sidebaricon' className="sidebaricon"
            onClick={() => setShowSideBar(!showSideBar)}
        />

    </div>)
}

export default Header;
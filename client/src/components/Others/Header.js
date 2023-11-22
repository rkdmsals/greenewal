import SideBar from "./SideBar"
import { useEffect, useState } from "react";
import $ from "jquery"
import "./Header.css"
import { useLocation } from "react-router-dom";
function Header() {
    const [showSideBar, setShowSideBar] = useState(false)
    const [pageName, setPageName] = useState("");
    const { pathname } = useLocation()

    useEffect(() => {
        switch (pathname) {
            case "/":
                setPageName("첫 페이지")
                break;
            case "/login":
                setPageName("로그인")
                break;
            case "/register":
                setPageName("회원가입")
                break;
            case "/eventinfo":
                setPageName("행사 정보")
                break;
            case "/booth":
                setPageName("부스 정보")
                break;
            case "/speaker":
                setPageName("강연 정보");
                break;
            case "/speaker/detail":
                setPageName("강연자 소개")
                break;

            case "/shop":
                setPageName("지난 굿즈 상점")
                break;
            case "/cart":
                setPageName("장바구니");
                break;


            case "/testStart":
            case "/test":
            case "/testAnswers":
                setPageName("이화이언 만점고사")
                break;
            case "/foods":
            case "/photo":
            case "/quizgame":
            case "/feedback":
                setPageName("부스 상세보기")
                break;

            case "/event":
                setPageName("이벤트 정보");
                break;
        }
        if (window.location.pathname.includes("/shop/product-detail")) {
            setPageName("굿즈 상세보기")
        }
        if (pathname.includes("/")) {
            setShowSideBar(false);
            $(".HideSide").css("display", "none");
            $(".HeaderAll").css("background-color", "#FBFBF4")
        }
        if ((pathname === "/testStart") || (pathname === "/test") || (pathname === "/testAnswers")) {
            $(".HeaderAll").css("background-color", "#E1DAD4")
        }

    }, [pathname])

    const goBack = () => {
        window.history.back();
    }
    return (<div className="HeaderAll">

        <div className="BackBtn" onClick={goBack}></div>
        <div className="PageName">{pageName}</div>
        <img src="/img/menu_navigation.png" alt='sidebaricon' className="sidebaricon"
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
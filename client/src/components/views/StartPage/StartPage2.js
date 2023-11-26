import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./StartPage2.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StartPage2() {
    const navigate = useNavigate();
    const redirectToExternalLink = (link) => {
        // 인자로 받은 링크로 이동
        window.location.href = link;
    };
    const handleClick = (path) => {
        // 인자로 받은 경로로 페이지 이동
        navigate(path);
    };
    //settings 부분, 슬라이더의 기능을 조정할 수 있다.
    const settings = {
        dots: true,
        infinite: true,
        //fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }


    return (
        <div className="GrnPage">
        <div className="GrnPage_container">
        <div className="GrnPage_Title_container">
            <div className="Grn_img_container">
                <div className="GrnTitle">Ewahaian</div>
                <img className="Grn_clober_green" src="/img/StartPage/clober_green.png" />
            </div>
            <div className="GrnTitle">Gree<span>n-ew</span>al</div>
            <img></img>
        </div>
        <div className="GrnTxt">이화이언 리뉴얼을 기념하여 <br />11/27 {"<Green-ewal>"}행사가 <br />이삼봉홀에서 진행됩니다.</div>
        <div className="GrnBanner">
        <Slider {...settings}>
            <div>
                <img className="GrnBanE" src="/img/StartPage/banner1.png" alt="banner1" onClick={() => redirectToExternalLink('https://www.beplain.co.kr/')}></img>
            </div>
            <div>
                <img className="GrnBanE" id="GrnBanE_2" src="/img/StartPage/banner2.png" alt="banner2" onClick={() => redirectToExternalLink('http://www.naturas.co.kr/')}></img>
            </div>
            <div>
                <img className="GrnBanE" id="GrnBanE_3" src="/img/StartPage/banner3.png" alt="banner3" onClick={() => redirectToExternalLink('https://darlcha.com/')}></img>
            </div>
            <div>
                <img className="GrnBanE" id="GrnBanE_4" src="/img/StartPage/banner4.png" alt="banner4" onClick={() => redirectToExternalLink('https://akbar.kr/')}></img>
            </div>
        </Slider>
        </div>
        <div className="GrnRoute">
            <div className="GrnRoute_inner_container">
            <div className="GrnRoute_menu_container">
                <div className="GrnRoute_menu">행사 정보</div>
                            <img className="Grn_arr_black" src="/img/StartPage/arr_black.png" onClick={() => handleClick('/eventinfo')} alt="GreenewalInfo"></img>
                    </div>
                        <div className="Grn_line"></div>
                        <div className="GrnRoute_menu_container">
                            <div className="GrnRoute_menu">부스 정보</div>
                            <img className="Grn_arr_black" src="/img/StartPage/arr_black.png" onClick={() => handleClick('/booth')} alt="BoothInfo"></img>
                        </div>
                        <div className="Grn_line"></div>
                        <div className="GrnRoute_menu_container">
                            <div className="GrnRoute_menu">강연 정보</div>
                            <img className="Grn_arr_black" src="/img/StartPage/arr_black.png" onClick={() => handleClick('/speaker')} alt="SpeakerInfo"></img>
                        </div>
                        <div className="Grn_line"></div>
                        <div className="GrnRoute_menu_container">
                            <div className="GrnRoute_menu">이벤트 정보</div>
                            <img className="Grn_arr_black" src="/img/StartPage/arr_black.png" onClick={() => handleClick('/event')} alt="EventInfo"></img>
                        </div>
                        <div className="Grn_line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage2;
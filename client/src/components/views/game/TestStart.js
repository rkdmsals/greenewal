import { useNavigate } from "react-router-dom";
import "./Test.css"
function TestStart() {
    const navigate = useNavigate();
    return (<div className="TestBackground TestStart">
        <div className="TestTitle">이화이언 만점고사</div>
        <div className="TestSubTitle">이화이언 영역</div>
        <div className="TestUser">
            <div>
                <span>이름</span>
                <span>이화연</span>
            </div>
            <div>
                <span>수험번호</span>
                <span>1886</span>
            </div>
        </div>
        <div className="TestDescription"><li>본 시험은 이화인들이 이화이언에 대해 얼마나 알고 있는지를 알아보기 위한 시험입니다.</li>
            <li>문제는 객관식 총 nn문항으로 구성되어 있습니다.</li>
            <li>문항에 따라 배점이 다르니, 각 물음의 끝에 표시된 배점을 참고 하십시오.</li></div>
        <button className="TestStartBtn" onClick={() => navigate('/test')}>응시하기</button>
    </div>)
}
export default TestStart;
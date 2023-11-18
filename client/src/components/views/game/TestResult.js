import { useNavigate } from "react-router-dom";
import "./TestStart.css"

function TestResult(props) {
    const navigate = useNavigate();
    const answers = props.answers;
    console.log(answers);
    /*정답리스트는 따로 여기에 작성*/
    const correctAnswers = [1, 3, 2, 3]
    var score = 0;
    if (correctAnswers.length === answers.length) {
        var i = 0;
        while (i < correctAnswers.length) {
            if (correctAnswers[i] === answers[i]) { score = score + 5; }
            i += 1;
        }
        console.log(score);
    } else {
        return <div>누락된 답안이 있습니다</div>;
    }

    return (<div className="TestBackground TestResult">
        <div className="StartRound">제 1교시</div>
        <div className="StartSubtitle">2023년도 하반기 이화이언 만점고사</div>
        <div className="TestTitle">이화인 탐구영역</div>
        <div className="TestUser">
            <div className="TestUserInfo"><span id="UserText">이름</span>
                <span>이화연</span>
                <div className="TestScore">{score}점<div></div></div>
            </div>
            <div className="TestUserInfo">
                <span id="UserText">수험번호</span>
                <span>1</span><span>8</span><span>8</span><span>6</span><span>-</span><span>2</span><span>0</span><span>0</span><span>1</span>
            </div>
        </div>

        <div className="TestDescription"><li>본 시험은 이화인들이 이화이언에 대해 얼마나 알고 있는지를 알아보기 위한 시험입니다.</li>
            <li>문제는 객관식 총 nn문항으로 구성되어 있습니다.</li>
            <li>문항에 따라 배점이 다르니, 각 물음의 끝에 표시된 배점을 참고 하십시오.</li></div>
        <button className="TestStartBtn" onClick={() => navigate('/testAnswers', { state: { answers, correctAnswers, score } })}>정답 및 해설</button>
    </div>)
}
export default TestResult;
import { useLocation } from "react-router-dom";
import TestEach from "./TestEach";
import TestData from "./questions.json";
import "./Test.css";
import Footer from "../../Others/Footer";
function CheckAnswers() {
    const location = useLocation();
    console.log(location.state.answers)
    const answers = location.state.answers;
    const correctAnswers = location.state.correctAnswers;
    const score = location.state.score;
    console.log(answers[0])
    return <div className="CheckAnswersBack">
        <div className="Round">제 1교시</div>
        <div>2023년도 하반기 이화이언 만점고사</div>
        <div style={{ fontSize: "36px" }}>이화인 탐구 영역</div>
        <div className="TestScore CheckAnswerScore">{score}점<div></div></div>
        <div className="Lines"></div>
        {TestData ? TestData.map((a, idx) => <div key={idx}>
            <TestEach page={idx + 1} question={a.question} answer1={a.answer1} answer2={a.answer2} answer3={a.answer3} answer4={a.answer4} answer5={a.answer5}
                userAnswer={answers[idx]} correctAnswer={correctAnswers[idx]} />
        </div>) : <div> 문제가 생김</div>}
        <Footer />
    </div>
}

export default CheckAnswers